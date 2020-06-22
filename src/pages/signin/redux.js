import { createSlice } from '@reduxjs/toolkit';
import { slices as simpleLayoutSlices, getState as getSimpleLyaoutState } from '~/layouts/simple/redux';

export const getState = async ({ authToken }) => {
    const layout = await getSimpleLyaoutState({ authToken });
    return { 
        ...layout,
        page: {}
     };
};

export const slices = {
    ...simpleLayoutSlices,
    page: createSlice({
        name: 'page/home',
        initialState: {},
        reducers: {}
    })
};
