//import React, { Component } from 'react'; for hooks we need not use component
import React, { useState } from 'react';// usestate allows to manipulate function in a component and initial state ispassed in it.
import './App.css';
import Person from './Person/Person';

//class App extends Component {
// inorder to use hooks
const app = props =>{
  const [personState, setpersonsState] = useState({ // use state returns only two elements one is current state and second is function that lets us manipulate
    persons:[
      {name: "Riya", age: 20},
      {name: "Priya", age: 16},
      {name: "Anagha", age: 20}
    ]
  });
  const SwitchHandler = () =>{
    //console.log("was clicked");
    setpersonsState({
      persons:[
        {name: 'Riya Tripathi', age: 20},
        {name: 'Priya', age: 16},
        {name: 'Anagha Mittal', age: 20}
      ]
    });
  };
  

 // No render() for a function body {
    return (
      <div className="App">
       <h1>Hi, i am a react App</h1>
       <p>This is really working!</p>
       <button onClick={SwitchHandler}>Switch Name</button>
       <Person name={personState.persons[1].name} age={personState.persons[1].age}>hobbies: stupidity</Person>
       <Person name={personState.persons[0].name} age={personState.persons[0].age} />
       <Person name={personState.persons[2].name} age={personState.persons[2].age} />
      </div>
    );
    //return React.createElement('div',null,React.createElement('h1',{className: 'App'},"hi i am a react app"));
    //this is equivalent to upar wala code but is cumbersome so we dont use it insteas we use JSX
    //React hooks is a collection of functions to create components in react 16.8 or higher.

};

export default app;
//  state is not used incase of hooks
/*state={
  persons:[
    {name: "Riya", age: 20},
    {name: "Priya", age: 16},
    {name: "Anagha", age: 20}
  ]
}
SwitchHandler = () =>{
  //console.log("was clicked");
  this.setState({
    persons:[
      {name: 'Riya Tripathi', age: 20},
      {name: 'Priya', age: 16},
      {name: 'Anagha Mittal', age: 20}
    ]
  })*/
