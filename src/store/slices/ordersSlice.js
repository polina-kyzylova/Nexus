import { createSlice } from '@reduxjs/toolkit';


const initialState = [];

const ordersSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {
        addOrderV1(state, action) {
            return [...state, action.payload];
        },
    },
});


export const {addOrderV1} = ordersSlice.actions;
export default ordersSlice.reducer;