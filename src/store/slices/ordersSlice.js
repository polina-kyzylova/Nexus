import { createSlice } from '@reduxjs/toolkit';



const initialState = {
    orders: [{
        order_id: null,
        order_date: null,
        status: null,
        order_purpose: null,
        doc_format: null,
        doc_amount: null,
        scolarship_type: null,
        discipline: null,
        semester: null,
        professor: null,
        reason: null,
        title: null,
        text: null,
        files: [],
    }]
};





const ordersSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {
        addOrder5(state, action) {
            state.orders.order_id = action.payload.order_id;
            state.orders.status = action.payload.status;
            state.orders.order_purpose = action.payload.order_purpose;
            state.orders.title = action.payload.title;
            state.orders.text = action.payload.text;
        },
    },
});


export const {addOrder5} = ordersSlice.actions;
export default ordersSlice.reducer;