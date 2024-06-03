import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const ordersSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {
        initAllOrders(state, action) {
            return [...state, ...action.payload];
        },
        addOrderV1(state, action) {
            state.push(action.payload);
        },
        updateOrderStatus(state, action) {
            state.map(item => {
                if (item.Номер_Заявки === action.payload.Номер_Заявки) {
                    item.Статус = action.payload.Статус
                    item.Статус_Код = action.payload.Статус_Код
                }
                return item;
            });
        },
        deleteAllOrders() {
            return [];
        }
    },
});


export const {addOrderV1, initAllOrders, deleteAllOrders, updateOrderStatus} = ordersSlice.actions;
export default ordersSlice.reducer;

