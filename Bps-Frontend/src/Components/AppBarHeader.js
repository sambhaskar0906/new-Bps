import React, { useState } from 'react';
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
import PersonIcon from '@mui/icons-material/Person';
import { useNavigate } from 'react-router-dom';

const AppBarHeader = () => {
    const navigate = useNavigate();
    const email = "admin@example.com"; // Replace with real user email

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

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
                                alt="Profile"
                                src="https://i.pravatar.cc/150?img=5"
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
                                src="https://i.pravatar.cc/150?img=5"
                                sx={{ width: 40, height: 40 }}
                            />
                            <Box>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Admin
                                </Typography>
                                <Typography variant="caption" color="text.secondary">
                                    {email}
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
