import Header from '~/features/header/Header';
import Footer from '~/features/footer/Footer';

export default ({ header, footer, children, actions }) => {
    console.log({ header, footer });
    return (
        <div className="layout-simple">
            <Header data={header} actions={actions.header} />
                { children }
            <Footer data={footer} actions={actions.footer} />
        </div>
    );
};