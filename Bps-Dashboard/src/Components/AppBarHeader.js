import React, { useState, useEffect } from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Avatar,
    Box,
    Tooltip,
    Menu,
    MenuItem,
    Divider,
    ListItemIcon,
} from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import axios from 'axios';

const AppBarHeader = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [user, setUser] = useState(null);
    const open = Boolean(anchorEl);

    useEffect(() => {
        const token = localStorage.getItem('authToken');
        if (token) {
            const fatchData = axios.get('http://localhost:8000/api/v2/users/profile', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
                .then(response => {
                    setUser(response.data.message);
                })
                .catch(error => {
                    console.error('Failed to fetch profile:', error);
                    setUser(null);
                });
            console.log("fatchinf adminImg data", fatchData)
        }
    }, []);


    const handleOpenMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCloseMenu = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        localStorage.removeItem("authToken");
        localStorage.removeItem("user");
        window.location.href = "http://localhost:5173/login";
    };

    return (
        <AppBar position="static" sx={{ zIndex: 1201, bgcolor: '#1976d2' }}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="h6" noWrap>
                    Admin Dashboard
                </Typography>

                <Box>
                    <Tooltip title="Open Profile Menu">
                        <IconButton onClick={handleOpenMenu} sx={{ p: 0 }}>
                            <Avatar
                                alt={user?.name}
                                src={`http://localhost:8000/${user?.adminProfilePhoto?.replace(/\\/g, '/')}`}
                                sx={{ width: 40, height: 40 }}
                            />
                        </IconButton>
                    </Tooltip>

                    <Menu
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleCloseMenu}
                        PaperProps={{
                            elevation: 6,
                            sx: {
                                mt: 1.5,
                                borderRadius: 2,
                                minWidth: 220,
                                p: 1,
                                bgcolor: '#fff',
                                '& .MuiMenuItem-root': {
                                    borderRadius: 1,
                                    mb: 0.5,
                                },
                            },
                        }}
                        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                    >
                        {/* User Info */}
                        <MenuItem sx={{ display: 'flex', gap: 1.5, alignItems: 'center' }}>
                            <Avatar
                                src={`http://localhost:8000/${user?.adminProfilePhoto?.replace(/\\/g, '/')}`}
                                sx={{ width: 40, height: 40 }}
                            />
                            <Box>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    {user?.firstName} {user?.lastName}
                                </Typography>

                                <Typography variant="caption" color="text.secondary" sx={{ wordBreak: 'break-all' }}>
                                    {user?.emailId}
                                </Typography>
                            </Box>
                        </MenuItem>

                        <Divider />

                        <MenuItem onClick={handleLogout}>
                            <ListItemIcon>
                                <LogoutIcon fontSize="small" color="error" />
                            </ListItemIcon>
                            <Typography color="error">Logout</Typography>
                        </MenuItem>
                    </Menu>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default AppBarHeader;
