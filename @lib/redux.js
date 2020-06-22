import { useState } from 'react';
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers, bindActionCreators } from 'redux';
import { Provider, connect } from 'react-redux';

export const withRedux = ({ slices, getState }) => (Component) => {
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

    const ConnectedComponent = connect(mapStateToProps, mapDispatchToProps)(Component);

    const WrappedComponent = ({ reduxState, ...props }) => {
        const [store] = useState(configureStore({ 
            reducer: reducer, 
            preloadedState: reduxState
        }));
    
        return (
            <Provider store={store}>
                <ConnectedComponent {...props} />
            </Provider>
        );
    };

    WrappedComponent.getInitialProps = async (context) => {
        let reduxState = await getState(context);
        let props = Component.getInitialProps ? await Component.getInitialProps(context) : {};
        return { ...props, reduxState };
    };

    return WrappedComponent; 
}