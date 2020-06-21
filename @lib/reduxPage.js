import { useState } from 'react';
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers, bindActionCreators } from 'redux';
import { Provider, connect } from 'react-redux';

export default (slices) => (Component) => ({ reduxState, ...props }) => {
    const reducer = combineReducers(Object.keys(slices).reduce((reducers, key) => {
        reducers[key] = slices[key].reducer;
        return reducers;
    }, {}));

    const mapStateToProps = (state) => state;

    const mapDispatchToProps = (dispatch) => ({  
        actions: Object.keys(slices).reduce((actions, key) => {
            actions[key] = bindActionCreators(slices[key].actions, dispatch);
            return actions;
        }, {})
    });

    const [store] = useState(configureStore({ 
        reducer: reducer, 
        preloadedState: reduxState
    }));
    const [ConnectedComponent] = useState(connect(mapStateToProps, mapDispatchToProps)(Component));

    return (
        <Provider store={store}>
            <ConnectedComponent {...props} />
        </Provider>
    );
}