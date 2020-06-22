import React, { useContext } from 'react';
import Router from 'next/router';
import Head from 'next/head';
import { withRedux } from '@lib/redux';
import { withAuth, AuthContext } from '@lib/auth';
import api from '~/api';
import SimpleLayout from '~/layouts/simple/Simple';
import { slices, getState } from './redux';

const Page = withRedux({ slices, getState })((props) => {
    const { header, footer, actions } = props;
    const { signIn } = useContext(AuthContext);

    const signInHandler = () => {
        api.auth.signIn({
            name: 'user',
            password: 'password'
        }).then(({ token }) => {
            signIn({ authToken: token });
            Router.push('/');
        });
    };

    return (
        <SimpleLayout header={header} footer={footer} actions={actions} >
            <Head>
                <title>Sign in</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <button onClick={signInHandler}>Sign in</button>
        </SimpleLayout>
    );
});

export default withAuth()(Page);