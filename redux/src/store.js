import { configureStore } from '@reduxjs/toolkit';
import todosSlise from './futures/todoSlise'
import authSlice from './futures/auth';
const store = configureStore({
    reducer: {
        todo : todosSlise,
        auth : authSlice
    }
});

export default store