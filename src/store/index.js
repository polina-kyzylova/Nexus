import { configureStore } from "@reduxjs/toolkit";
import userReducer from './slices/userSlice';
import ordersReducer from './slices/ordersSlice';
import serviceSlice from "./slices/serviceSlice";


export const store = configureStore({
    reducer: {
        user: userReducer,
        orders: ordersReducer,
        service: serviceSlice,
    }
});