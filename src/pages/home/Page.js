import Head from 'next/head';
import Link from 'next/link';
import { withRedux } from '@lib/redux';
import { withAuth } from '@lib/auth';
import SimpleLayout from '~/layouts/simple/Simple';
import { slices, getState } from './redux';


const Page = withRedux({ slices, getState })((props) => {
    const { header, footer, page, actions } = props;
    const { posts } = page;

    return (
        <SimpleLayout header={header} footer={footer} actions={actions} >
            <Head>
                <title>Home</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Link href="/example"><a>Example</a></Link>
            {
                posts.map((post) => {
                    return (
                        <div key={post.id}>{post.title}</div>
                    );
                })
            }
            <button onClick={() => actions.page.addPost({ title: 'Test' })}>Добавить</button>
        </SimpleLayout>
    );
});

export default withAuth()(Page);