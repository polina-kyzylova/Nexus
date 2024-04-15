import { createSlice } from "@reduxjs/toolkit";

/*
const initialState = {
    email: 'ivanovii@std.tyuiu.ru',
    phone: '+7(111)111-11-11',
    token: null,
    id: null,
    card_id: '11-11-111111',
    name: 'Иван',
    last_name: 'Иванович',
    surname: 'Иванов',
    group: 'ПКТб-22-1',
    eduForm: 'Очная',
    enrolled: '1234 о/п 22.08.2022 г.',
    acceptDate: '05 сентября 2022 г.'
};
*/



const initialState = {
    email: null,
    phone: null,
    token: null,
    id: null,
    card_id: null,
    name: null,
    last_name: null,
    surname: null,
    group: null,
    eduForm: null,
    enrolled: null,
    acceptDate: null
};



const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action) {
            state.email = action.payload.email;
            state.phone = action.payload.phone;
            state.token = action.payload.token;
            state.id = action.payload.id;
            state.card_id = action.payload.card_id;
            state.name = action.payload.name;
            state.last_name = action.payload.last_name;
            state.surname = action.payload.surname;
            state.group = action.payload.group;
            state.eduForm = action.payload.eduForm;
            state.enrolled = action.payload.enrolled;
            state.acceptDate = action.payload.acceptDate;
        },
        removeUser(state) {
            state.email = null;
            state.phone = null;
            state.token = null;
            state.id = null;
            state.card_id = null;
            state.name = null;
            state.last_name = null;
            state.surname = null;
            state.group = null;
            state.eduForm = null;
            state.enrolled = null;
            state.acceptDate = null;
        },
    },
});

export const {setUser, removeUser} = userSlice.actions;
export default userSlice.reducer;