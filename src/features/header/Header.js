export default ({ data, actions }) => {
    const { title } = data;
    return (
        <header>{ title }</header>
    );
};