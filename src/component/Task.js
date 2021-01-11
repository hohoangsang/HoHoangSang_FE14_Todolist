import React from 'react';


import Text from './Text';
import Status from './Status';
import InputText from './InputText';

function Task(props) {
    const {
        isLastItem,
        isFirstItem,
        content,
        title,
        status,
        index,
        updateData,
    } = props;

    const [isEditing, setIsEditing] = React.useState(false);
    const [inputValue, setInputValue] = React.useState({value: '', index: 0})

    const getValue = (value, index) =>{
        setInputValue({value: value, index: index});
    }

    const saveData = () => {
        setIsEditing(false)
        updateData(inputValue.value, inputValue.index);
    }

    const showInputText = () => {
        if (isEditing) {
            return (
                <div>
                    <InputText getValue = {getValue} index = {index}/>
                    <p onClick = {() => saveData()}>Save</p>
                </div>
            )
        } else {
            return (
                <div onClick = {() => {setIsEditing(true)}}>
                    <Text isTitle content={title} />
                    <Text content={content} />
                </div>
            )
        }
    }

    const liStyle = {
        width: 400,
        border: '2px solid #009933',
        listStyle: 'none',
        margin: 'auto',
        padding: '10px 16px',
    }
    const chooseStyle = () => {
        if (props.isLastItem) return {
            color: 'red',
            borderRadius: '0 0 20px 20px',
        };
        if (props.isFirstItem) return {
            color: 'blue',
        };
        return;
    }

    return (
        <li style={{ ...liStyle, ...chooseStyle() }}>
            {showInputText()}
            <Status status={status} />
        </li>
    );
}

export default Task;