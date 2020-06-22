import { createSlice } from '@reduxjs/toolkit';
import update from 'immutability-helper';
import api from '~/api';
import { slices as simpleLayoutSlices, getState as getSimpleLyaoutState } from '~/layouts/simple/redux';

export const getState = async ({ authToken }) => {
    const layout = await getSimpleLyaoutState({ authToken });
    const posts = await api.post.list({ authToken });
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
        name: 'page/example',
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
