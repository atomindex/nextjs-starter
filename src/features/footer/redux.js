import { createSlice } from '@reduxjs/toolkit';

export const getState = async () => {
    return { 
        footer: {
            title: 'Footer'
        }
     };
};

export const slices = {
    footer: createSlice({
        name: 'feature/footer',
        initialState: {},
        reducers: {
            none(state, action) {
                return state;
            }
        }
    })
};
