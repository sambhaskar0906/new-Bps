import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/loginSlice';

const store = configureStore({
    reducer: {
        auth: authReducer,
    },
});

export default store;
