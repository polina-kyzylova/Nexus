import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    urlV2: 'http://localhost/server/hs/nexus/neworderV2',
    urlV3: 'http://localhost/server/hs/nexus/neworderV3',
    urlV4: 'http://localhost/server/hs/nexus/neworderV4',
    urlV5: 'http://localhost/server/hs/nexus/neworderV5',
};

const serviceSlice = createSlice({
    name: 'service',
    initialState,
});

export default serviceSlice.reducer;
