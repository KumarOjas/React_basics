import React from 'react';
//import styled from 'styled-components';
import classes from './Person.css';
//import Radium from 'radium';
// this is a state less component
const person = (props) =>{
    //adding errors and catching them. For that a new Error folder has to be created.
    //const rand=Math.random();
    /*if (rand>0.7)
    {
        throw new Error('Something went Wrong');
    };*/
    return (
    <div className={classes.Person}>
        <p onClick={props.click}>Hi! I'm {props.name}! And i am {props.age} years old</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.change} value={props.name}/>

    </div>
    )
};
export default person;
// while exporting wrap person with Radium while using radium library