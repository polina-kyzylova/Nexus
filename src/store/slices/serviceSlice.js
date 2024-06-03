import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOrdersLoaded: false,
};

const serviceSlice = createSlice({
    name: 'service',
    initialState,
    reducers: {
        setOrdersLoaded(state, action) {
            state.isOrdersLoaded = action.payload.isOrdersLoaded;
        },
    },
});


export const {setOrdersLoaded} = serviceSlice.actions;
export default serviceSlice.reducer;
