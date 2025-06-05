import React, { useState, useEffect } from 'react';
import {
    Box,
    Card,
    Typography,
    TextField,
    InputAdornment,
    IconButton,
    Button,
    CircularProgress,
    Alert,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, fetchUserProfile } from '../features/loginSlice';
import { useNavigate } from 'react-router-dom';
import loginImage from '../assets/BoxMan.svg';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
} from '@mui/material';
import { sendResetCode, changePassword } from '../features/loginSlice';


const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [openForgotModal, setOpenForgotModal] = useState(false);
    const [step, setStep] = useState(1);
    const [forgotEmail, setForgotEmail] = useState('');
    const [otp, setOtp] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [forgotError, setForgotError] = useState(null);
    const [forgotLoading, setForgotLoading] = useState(false);
    const [forgotSuccess, setForgotSuccess] = useState(false);


    const { resetStatus } = useSelector((state) => state.auth);

    const handleForgotPassword = () => {
        setOpenForgotModal(true);
        setStep(1);
        setForgotError(null);
        setForgotSuccess(false);
    };

    const handleCloseForgotModal = () => {
        setOpenForgotModal(false);
        setForgotEmail('');
        setOtp('');
        setNewPassword('');
        setForgotError(null);
        setForgotSuccess(false);
    };

    const handleForgotSubmit = async () => {
        if (!forgotEmail) {
            setForgotError('Please enter your email');
            return;
        }

        setForgotLoading(true);
        setForgotError(null);

        try {
            await dispatch(sendResetCode({ emailId: forgotEmail })).unwrap();
            setForgotLoading(false);
            setStep(2); // move to OTP step
            setForgotSuccess(true);
        } catch (error) {
            setForgotLoading(false);
            setForgotError(error.message || 'Failed to send reset code');
        }
    };

    // Step 2: Verify OTP (just move to next step here)
    const handleVerifyOtp = () => {
        if (!otp) {
            setForgotError('Please enter the OTP');
            return;
        }
        setForgotError(null);
        setStep(3); // Just move to the final step
    };

    // Step 3: Change password API call
    const handleChangePassword = async () => {
        if (!newPassword) {
            setForgotError('Please enter a new password');
            return;
        }

        setForgotLoading(true);
        setForgotError(null);

        try {
            await dispatch(changePassword({
                emailId: forgotEmail,
                code: otp,
                newPassword,
            })).unwrap();

            setForgotLoading(false);
            setForgotSuccess(true);
            setTimeout(() => {
                handleCloseForgotModal();
            }, 1500);
        } catch (error) {
            setForgotLoading(false);
            setForgotError(error.message || 'Failed to reset password');
        }
    };



    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({ emailId: '', password: '' });

    const { isAuthenticated, loading, error } = useSelector((state) => state.auth);

    const handleTogglePassword = () => setShowPassword(!showPassword);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {

            const loginResponse = await dispatch(loginUser(formData)).unwrap();
            const token = loginResponse.message.token;
            localStorage.setItem("authToken", token);

            const profileResponse = await dispatch(fetchUserProfile(token)).unwrap();
            const role = profileResponse.message?.role;

            console.log('✅ Role received from profile:', role);

            if (typeof role === 'string' && role.length > 0) {
                localStorage.setItem("userRole", role);
            } else {
                console.warn("⚠️ Role is not a valid string.");
            }

            setTimeout(() => {
                window.location.href = `http://localhost:3000/?token=${token}&role=${role}`;
            }, 100); // 100ms delay

        } catch (err) {
            console.error('❌ Login or Profile fetch failed', err);
        }
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
                {/* Left - Form */}
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

                    {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
                    {loading && <CircularProgress sx={{ mb: 2, mx: 'auto' }} />}

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
                            disabled={loading}
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
                    <Typography
                        variant="body2"
                        sx={{
                            textAlign: 'right',
                            mt: 1,
                            color: 'primary.main',
                            cursor: 'pointer',
                            textDecoration: 'underline',
                        }}
                        onClick={handleForgotPassword}
                    >
                        Forgot Password?
                    </Typography>

                    <Dialog open={openForgotModal} onClose={handleCloseForgotModal} maxWidth="xs" fullWidth>
                        <DialogTitle>Forgot Password</DialogTitle>
                        <DialogContent>
                            {forgotError && <Alert severity="error" sx={{ mb: 2 }}>{forgotError}</Alert>}
                            {forgotSuccess && step === 1 && (
                                <Alert severity="success" sx={{ mb: 2 }}>
                                    OTP sent! Please check your email.
                                </Alert>
                            )}
                            {forgotSuccess && step === 3 && (
                                <Alert severity="success" sx={{ mb: 2 }}>
                                    Password reset successful! Closing...
                                </Alert>
                            )}

                            {step === 1 && (
                                <>
                                    <Typography>Please enter your registered email:</Typography>
                                    <TextField
                                        fullWidth
                                        margin="normal"
                                        label="Email"
                                        type="email"
                                        value={forgotEmail}
                                        onChange={(e) => setForgotEmail(e.target.value)}
                                        disabled={forgotLoading}
                                    />
                                </>
                            )}

                            {step === 2 && (
                                <>
                                    <Typography>Please enter the OTP sent to your email:</Typography>
                                    <TextField
                                        fullWidth
                                        margin="normal"
                                        label="OTP"
                                        value={otp}
                                        onChange={(e) => setOtp(e.target.value)}
                                        disabled={forgotLoading}
                                    />
                                </>
                            )}

                            {step === 3 && (
                                <>
                                    <Typography>Set your new password:</Typography>
                                    <TextField
                                        fullWidth
                                        margin="normal"
                                        label="New Password"
                                        type="password"
                                        value={newPassword}
                                        onChange={(e) => setNewPassword(e.target.value)}
                                        disabled={forgotLoading}
                                    />
                                </>
                            )}
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleCloseForgotModal} disabled={forgotLoading}>Cancel</Button>

                            {step === 1 && (
                                <Button
                                    onClick={handleForgotSubmit}
                                    variant="contained"
                                    disabled={forgotLoading}
                                    startIcon={forgotLoading ? <CircularProgress size={20} /> : null}
                                >
                                    Send OTP
                                </Button>
                            )}
                            {step === 2 && (
                                <Button
                                    onClick={handleVerifyOtp}
                                    variant="contained"
                                    disabled={forgotLoading}
                                >
                                    Verify OTP
                                </Button>
                            )}
                            {step === 3 && (
                                <Button
                                    onClick={handleChangePassword}
                                    variant="contained"
                                    disabled={forgotLoading}
                                    startIcon={forgotLoading ? <CircularProgress size={20} /> : null}
                                >
                                    Reset Password
                                </Button>
                            )}
                        </DialogActions>
                    </Dialog>

                </Box>

                {/* Right - Image */}
                <Box
                    sx={{
                        width: '50%',
                        background: 'linear-gradient(to bottom, #43e97b, #38f9d7)',
                        display: { xs: 'none', md: 'flex' },
                        alignItems: 'center',
                        justifyContent: 'center',
                        p: 3,
                        position: 'relative',
                    }}
                >
                    <Box
                        component="img"
                        src={loginImage}
                        alt="Login Illustration"
                        sx={{ maxWidth: '100%', maxHeight: '100%' }}
                    />
                    <Typography
                        variant="h6"
                        sx={{
                            position: 'absolute',
                            top: '40%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            fontWeight: 'bold',
                            color: '#fff',
                            textAlign: 'center',
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
