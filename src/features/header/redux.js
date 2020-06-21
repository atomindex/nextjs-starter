import { createSlice } from '@reduxjs/toolkit';

export const getState = async () => {
    return { 
        header: {
            title: 'Header'
        }
     };
};

export const slices = {
    header: createSlice({
        name: 'feature/header',
        initialState: {},
        reducers: {
            none(state, action) {
                return state;
            }
        }
    })
};
