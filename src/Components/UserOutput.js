import React from 'react';
import './UserOutput.css';

const UserOutput = (props) => {
    return (
    <div className = "userOutput">
        <p>Name: {props.name}, Age: {props.age}</p>
    </div>
    )
}

export default UserOutput;
