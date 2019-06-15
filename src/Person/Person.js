import React from 'react';


const person =(props)=>{
    return (
    <div>
        <p onClick = {props.click }>Im {props.name} and im {props.age} years</p>
        <button>{props.children}</button>
        <input type ="text" onChange = {props.changed} value={props.name}/>
    </div>
    );
}

export default person;