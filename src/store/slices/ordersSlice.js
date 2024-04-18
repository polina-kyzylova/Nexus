import { createSlice } from '@reduxjs/toolkit';


const initialState = [];

const ordersSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {
        addOrderV1(state, action) {
            state.push(action.payload);
        },
        initAllOrders(state, action) {
            return [...state, ...action.payload];
        },
        deleteAllOrders() {
            return [];
        }
    },
});


export const {addOrderV1, initAllOrders, deleteAllOrders} = ordersSlice.actions;
export default ordersSlice.reducer;