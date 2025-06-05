import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    user: null,
    token: null,
    loading: false,
    error: null,
    isAuthenticated: false,
    role: null,
    resetStatus: {
        sending: false,
        verifying: false,
        resetting: false,
        success: false,
        error: null,
    },
};

export const loginUser = createAsyncThunk(
    'auth/loginUser',
    async (credentials, { rejectWithValue }) => {
        try {
            const response = await axios.post('http://localhost:8000/api/v2/users/login', credentials);
            return response.data;
        } catch (err) {
            return rejectWithValue(err.response?.data || { message: 'Login failed' });
        }
    }
);

export const fetchUserProfile = createAsyncThunk(
    'auth/fetchUserProfile',
    async (token, { rejectWithValue }) => {
        try {
            const response = await axios.get('http://localhost:8000/api/v2/users/profile', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            return response.data;
        } catch (err) {
            return rejectWithValue(err.response?.data || { message: 'Failed to fetch profile' });
        }
    }
);

// Add these thunks at the top (after fetchUserProfile)

export const sendResetCode = createAsyncThunk(
    'auth/sendResetCode',
    async ({ emailId }, thunkAPI) => {
        try {
            const response = await axios.post('http://localhost:8000/api/v2/users/send-reset-code', { emailId });
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data.message || 'Error sending code');
        }
    }
);


export const changePassword = createAsyncThunk(
    'auth/changePassword',
    async ({ emailId, code, newPassword }, { rejectWithValue }) => {
        try {
            const response = await axios.post('http://localhost:8000/api/v2/users/changePassword', {
                emailId,
                code,
                newPassword,
            });
            return response.data;
        } catch (err) {
            return rejectWithValue(err.response?.data || { message: 'Failed to reset password' });
        }
    }
);


const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.user = null;
            state.token = null;
            state.role = null;
            state.isAuthenticated = false;
            state.error = null;
            state.loading = false;
            state.resetStatus = {
                sending: false,
                verifying: false,
                resetting: false,
                success: false,
                error: null,
            };
        },
        resetResetStatus: (state) => {
            state.resetStatus = {
                sending: false,
                verifying: false,
                resetting: false,
                success: false,
                error: null,
            };
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.token = action.payload.message.token;
                state.isAuthenticated = true;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload?.message || 'Login failed';
            })
            .addCase(fetchUserProfile.fulfilled, (state, action) => {
                const userProfile = action.payload.message;
                state.user = userProfile;
                state.role = userProfile.role;
            })
            .addCase(fetchUserProfile.rejected, (state, action) => {
                state.error = action.payload?.message || 'Failed to fetch profile';
            })

            // sendResetCode cases
            .addCase(sendResetCode.pending, (state) => {
                state.resetStatus.sending = true;
                state.resetStatus.error = null;
                state.resetStatus.success = false;
            })
            .addCase(sendResetCode.fulfilled, (state, action) => {
                state.resetStatus.sending = false;
                state.resetStatus.success = true;
            })
            .addCase(sendResetCode.rejected, (state, action) => {
                state.resetStatus.sending = false;
                state.resetStatus.error = action.payload?.message || 'Failed to send reset code';
                state.resetStatus.success = false;
            })

            // changePassword cases
            .addCase(changePassword.pending, (state) => {
                state.resetStatus.resetting = true;
                state.resetStatus.error = null;
                state.resetStatus.success = false;
            })
            .addCase(changePassword.fulfilled, (state, action) => {
                state.resetStatus.resetting = false;
                state.resetStatus.success = true;
            })
            .addCase(changePassword.rejected, (state, action) => {
                state.resetStatus.resetting = false;
                state.resetStatus.error = action.payload?.message || 'Failed to reset password';
                state.resetStatus.success = false;
            });
    },
});

export const { logout, resetResetStatus } = authSlice.actions;
export default authSlice.reducer;
