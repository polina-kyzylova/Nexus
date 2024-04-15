import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from './slices/userSlice';
import ordersReducer from './slices/ordersSlice';
import serviceSlice from "./slices/serviceSlice";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
    } from 'redux-persist';
import storage from 'redux-persist/lib/storage';




const rootReducer = combineReducers({
    user: userReducer,
    orders: ordersReducer,
    service: serviceSlice,
});

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);


const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({
        serializableCheck: {
            ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
});

export const persistor = persistStore(store);
export default store;
