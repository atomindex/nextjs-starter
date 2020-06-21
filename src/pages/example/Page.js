import Head from 'next/head';
import Link from 'next/link';
import withRedux from '@lib/reduxPage';
import SimpleLayout from '~/layouts/simple/Simple';
import { slices, getState } from './redux';


export default withRedux(slices)((props) => {
    const { header, page, footer, actions } = props;
    const { posts } = page;

    return (
        <div className="container">
            <Head>
                <title>Example</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <SimpleLayout header={header} footer={footer} actions={actions}>
                <Link href="/"><a>Home</a></Link>
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

export async function getServerSideProps() {
    console.log('start fetching index');
    const reduxState = await getState();
    return { props: { reduxState } };
}