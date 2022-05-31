import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    user:null,
    token:null,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        
        setToken: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
        }


    },
})

export const { setToken } = authSlice.actions;