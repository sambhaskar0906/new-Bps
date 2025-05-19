import React, { useState } from 'react';
import {
    Box,
    Card,
    CardContent,
    Typography,
    TextField,
    InputAdornment,
    IconButton,
    Button,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import loginImage from '../assets/BoxMan.svg'; // Make sure this path is correct

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({ emailId: '', password: '' });

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Login Data:', formData);
    };

    return (
        <Box
            sx={{
                background: 'linear-gradient(to right, #4facfe, #00f2fe)',
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                p: 2,
            }}
        >
            <Card
                sx={{
                    display: 'flex',
                    width: { xs: '100%', sm: '90%', md: '800px' },
                    height: { xs: 'auto', md: '500px' },
                    borderRadius: 4,
                    boxShadow: 10,
                    overflow: 'hidden',
                }}
            >
                {/* Left side - Login Form */}
                <Box
                    sx={{
                        width: { xs: '100%', md: '50%' },
                        p: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                    }}
                >
                    <Typography variant="h2" fontWeight="bold" gutterBottom align="center">
                        Welcome BPS
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom align="center">
                        Log in to your account
                    </Typography>

                    <form onSubmit={handleSubmit}>
                        <TextField
                            label="Email"
                            name="emailId"
                            fullWidth
                            margin="normal"
                            value={formData.emailId}
                            onChange={handleChange}
                            required
                        />
                        <TextField
                            label="Password"
                            name="password"
                            type={showPassword ? 'text' : 'password'}
                            fullWidth
                            margin="normal"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton onClick={handleTogglePassword} edge="end">
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            fullWidth
                            sx={{
                                mt: 3,
                                py: 1.5,
                                background: 'linear-gradient(to right, #43e97b, #38f9d7)',
                                fontWeight: 'bold',
                                fontSize: '1rem',
                                borderRadius: 2,
                                ':hover': {
                                    background: 'linear-gradient(to right, #38f9d7, #43e97b)',
                                },
                            }}
                        >
                            Log In
                        </Button>
                    </form>
                </Box>

                {/* Right side - Image */}
                <Box
                    sx={{
                        width: '50%',
                        background: 'linear-gradient(to bottom, #43e97b, #38f9d7)',
                        display: { xs: 'none', md: 'flex' },
                        alignItems: 'center',
                        justifyContent: 'center',
                        p: 3,
                        position: 'relative', // Required for absolute positioning inside
                    }}
                >
                    {/* Image */}
                    <Box
                        component="img"
                        src={loginImage}
                        alt="Login Illustration"
                        sx={{ maxWidth: '100%', maxHeight: '100%' }}
                    />

                    {/* Overlay Text */}
                    <Typography
                        variant="h6"
                        sx={{
                            position: 'absolute',
                            top: '40%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            fontWeight: 'bold',
                            color: '#fff',
                            textAlign: 'center'
                        }}
                    >
                        Bharat Parcel Services
                    </Typography>
                </Box>


            </Card>
        </Box>
    );
};

export default Login;
