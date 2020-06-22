import React from 'react';
import serverCookie from 'cookie';
import clientCookie from 'js-cookie';

export const AuthContext = React.createContext();

export const withAuth = ({ tokenName = 'token' } = {}) => (Component) => {
    const signIn = ({ authToken, expires = 1 }) => {
        clientCookie.set(tokenName, authToken, {
            path: '/',
            expires: expires
        });
    };

    const signOut = () => {
        clientCookie.remove(tokenName, {
            path: '/'
        });
    };

    const AuthComponent = ({ authToken, ...props }) => {
        return (
            <AuthContext.Provider value={{ authToken, signIn, signOut }}>
                <Component {...props} />
            </AuthContext.Provider>
        );
    };

    AuthComponent.getInitialProps = async (context) => {
        const { req } = context;
        const authToken = req ? serverCookie.parse(req.headers.cookie)[tokenName] : clientCookie.get(tokenName);
        context.authToken = authToken;
        const props = Component.getInitialProps ? await Component.getInitialProps(context) : {};
        return { ...props, authToken };
    };

    return AuthComponent;
};