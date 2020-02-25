import React, { Component } from 'react';
//import Radium,{StyleRoot} from 'radium';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
//import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

// container component like App.js that contain state and its handling should not contain too much of jsx.

class App extends Component {
    //this is a state full component
    state={
        persons:[
          {id: "hjge12" ,name: "Riya", age: 20},
          {id: "hjge13" ,name: "Priya", age: 16},
          {id: "hjge14" ,name: "Anagha", age: 20}
        ],
        showPersons: false
      }
      
    NameChangeHandler = (event,id) => {
      const personIndex= this.state.persons.findIndex(p => {
        return p.id === id;
      });
      const person =  {
        ...this.state.persons[personIndex]
      }
      person.name=event.target.value;
      const persons=[...this.state.persons]
      persons[personIndex] = person;
      this.setState({ persons: persons });
    };
    toggleHandler = () =>{
      const does= this.state.showPersons;
      this.setState({showPersons: !does});
    };
    
    deleteNameHandler= (personIndex) =>{
      //just using splice will delete the original data so we need to create a copy of persons array
      //const persons= this.state.persons;
      //const persons=this.state.persons.slice();//creates a copy
      //alternative
      const persons= [...this.state.persons];

      persons.splice(personIndex,1);
      this.setState({persons: persons});
      //key is used so that react can compare present and past events efficiently in virtual DOM
    }

render(){
  /*const style= {
    backgroundColor: 'green',
    font: 'inherit',
    border: '1x solid blue',
    padding: '8px',
    cursor : 'pointer',
    ':hover':{
      backgroundColor: 'lightgreen', 
      color: 'black'
    }
  };*/
  let btnclass = [classes.Button];
  let persons = null;
  if (this.state.showPersons)
  {
    persons =(
    
    
    <div>
    <Persons 
      persons = {this.state.persons}
      clicked= {this.deleteNameHandler}
      changed= {this.NameChangeHandler}/>    
    </div>
    )
    //style.backgroundColor='pink'
    //style[':hover']={
      //backgroundColor: 'cyan'
      
    //}
    btnclass.push(classes.Red);
  }
  
  const assignedClasses=[];
  if (this.state.persons.length<=2)
  {
    assignedClasses.push(classes.red);//classes = ['red]
  }
  if (this.state.persons.length<=1)
  {
    assignedClasses.push(classes.bold);//classes=['red' 'bold']
  }
  // alternative to call deleteNameHandler cud have been using bind(this,index)
    return (
        <div className={classes.App}>
         <h1>Hi, i am a react App</h1>
         <p className={assignedClasses.join(' ')}>This is really working!</p>
         
         <button className={btnclass.join(' ')} onClick={this.toggleHandler}>Toggle Button
          </button>
          {persons}
        </div>
      );
    }
};
export default App;
//radium is a high order component
//button onClick={this.SwitchHandler.bind(this,'Riya Tripathi') using bind. 
// react can re render certain things if function syntax in used. bind is preferred.
/*<Person 
name={this.state.persons[1].name}
age={this.state.persons[1].age} change={this.NameChangeHandler}  >hobbies: stupidity</Person>
<Person 
name={this.state.persons[0].name} 
age={this.state.persons[0].age} click = {this.SwitchHandler.bind(this,'Riya!!')} />
<Person 
name={this.state.persons[2].name} 
age={this.state.persons[2].age}  />*/
// Individual usage of person elements can be avoided by map function 