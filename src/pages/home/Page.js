import Head from 'next/head';
import Link from 'next/link';
import withRedux from '@lib/reduxPage';
import auth from '~/utils/auth';
import SimpleLayout from '~/layouts/simple/Simple';
import { slices, getState } from './redux';


export default withRedux(slices)((props) => {
    const { header, footer, page, actions } = props;
    const { posts } = page;

    return (
        <div className="container">
            <Head>
                <title>Home</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <SimpleLayout header={header} footer={footer} actions={actions} >
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
        </div>
    )
});

export async function getServerSideProps({ req }) {
    const authToken = auth.getToken(req);
    const reduxState = await getState({ authToken });
    return { props: { reduxState, authToken } };
}