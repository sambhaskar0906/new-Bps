import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    user: null,
    token: null,
    loading: false,
    error: null,
    isAuthenticated: false,
};

// Async thunk for login
export const loginUser = createAsyncThunk(
    'auth/loginUser',
    async (credentials, { rejectWithValue }) => {
        try {
            // Make sure credentials has emailId and password
            const response = await axios.post('http://localhost:8000/api/v2/users/login', credentials);
            // Backend response example: { user: {...}, token: '...' }
            return response.data;
        } catch (err) {
            // Return error message from backend or fallback
            return rejectWithValue(err.response?.data || { message: 'Login failed' });
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
            state.isAuthenticated = false;
            state.error = null;
            state.loading = false;
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
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isAuthenticated = true;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload?.message || 'Login failed';
            });
    },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
