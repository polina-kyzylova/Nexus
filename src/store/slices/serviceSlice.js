import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    urlV1: '',
    urlV2: '',
    urlV3: '',
    urlV4: '',
    urlV5: '',
};

const serviceSlice = createSlice({
    name: 'service',
    initialState,
});

export default serviceSlice.reducer;
