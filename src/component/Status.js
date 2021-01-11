function Status(props) {
    switch (props.status) {
        case 'done':
            return <p style={{ color: 'green', fontWeight : 'bold' }}>{props.status}</p>;
        case 'cancel':
            return <p style={{ color: 'red', textDecoration : 'line-through' }}>{props.status}</p>;
        case 'pending':
            return <p style={{ color: 'blue', textDecoration : 'underline' }}>{props.status}</p>;
        default:
            return <p style={{ color: 'black', fontWeight : 'bold' }}>{props.status}</p>;
    }
}

export default Status;