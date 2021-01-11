function Text(props) {
    const { isTitle, content } = props;
    return (
        //<p style = {isTitle ? {fontWeight: 'bold'} : {}}>
        // {content}
        //</p>
        isTitle ? //Toan tu ba ngoi
            <h2>{content}</h2>
            : <p>{content}</p>
    );
}

export default Text;