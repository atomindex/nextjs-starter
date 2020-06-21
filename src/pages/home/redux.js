import { createSlice } from '@reduxjs/toolkit';
import update from 'immutability-helper';
import api from '../../api';
import { slices as simpleLayoutSlices, getState as getSimpleLyaoutState } from '~/layouts/simple/redux';

export const getState = async () => {
    const layout = await getSimpleLyaoutState();
    const posts = await api.post.list();
    return { 
        ...layout,
        page: {
            posts
        }
     };
};

export const slices = {
    ...simpleLayoutSlices,
    page: createSlice({
        name: 'page/home',
        initialState: {},
        reducers: {
            addPost(state, action) {
                const { title } = action.payload;
                return update(state, {
                    posts: {
                        $push: [{
                            id: (new Date()).getTime(),
                            title: title
                        }]
                    }
                })
            }
        }
    })
};
