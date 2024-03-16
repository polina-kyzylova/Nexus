import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email: null,
    token: null,
    id: null,
    name: null,
    last_name: null,
    surname: null,
    group: null,
};


const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action) {
            state.email = action.payload.email;
            state.token = action.payload.token;
            state.id = action.payload.id;
            state.name = action.payload.name;
            state.last_name = action.payload.last_name;
            state.surname = action.payload.surname;
            state.group = action.payload.group;
        },
        removeUser(state) {
            state.email = null;
            state.token = null;
            state.id = null;
            state.name = null;
            state.last_name = null;
            state.surname = null;
            state.group = null;
        },
    },
});

export const {setUser, removeUser} = userSlice.actions;
export default userSlice.reducer;