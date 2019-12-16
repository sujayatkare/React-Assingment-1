import React from 'react';
import UserOutput from './UserOutput';
import './UserInput.css';
const UserInput = (props) => {
    return <div className = "userInput">
        <input type = "text" onChange = {props.modified} value ={props.name}/>
        </div>
}

export default UserInput;
