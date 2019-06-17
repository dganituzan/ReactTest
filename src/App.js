import React, { Component } from 'react';
import Person from './Person/Person.js';
import './App.css';
import person from './Person/Person.js';

class App extends Component {
  state = {
    persons: [
      {id:'sdf', name: 'Dganit', age: 24},
      {id:'dgdf',name: 'max', age: 28}
    ],
    showPersons: false
  }

  deletePersonHandler=(personIndex)=>{
    const persons = [...this.state.persons];
    //const persons = this.state.persons.slice();
    persons.splice(personIndex,1);
    this.setState({persons: persons});
  }

  onChangeName =(event,id)=>{
    // return true if this is the person im looking for- so 
    //so we need to return what we want the index to be
    const personIndex = this.state.persons.findIndex(p=>{
      return p.id === id;
    })
    // we need to take a copy of the object. not the real one 
    const person = {...this.state.persons[personIndex]};
    person.name = (event.target.value);
    
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons });
  }

  togglePersonHandler=()=>{
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }


  render() {

    const styleButton ={
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    };


    let classes = [];
    if(this.state.persons.length <= 2){
      classes.push('red');
    }
    if(this.state.persons.length<=1 ){
      classes.push('bold');
    }
    let persons = null;

    if(this.state.showPersons){
      persons=(
        <div>
          {this.state.persons.map((person,index) =>{
            return <Person 
            key={person.id}
            name={person.name} 
            age={person.age}
            click={()=>this.deletePersonHandler(index)}
            changed = {(event)=>this.onChangeName(event,person.id)}
            /> })}
            </div>);
            styleButton.backgroundColor='red';
          }
  
    return (
      <div className="App">
       <h1 >hi im a react app </h1>
       <p className={classes.join(' ')}>test style</p>
       <button
         style ={styleButton}
         onClick= {this.togglePersonHandler}>show persons</button>
          {persons}
      </div>
    );

   // return(React.createElement('div',{className: 'App'},React.createElement('h1',null,'It is working!!!!!')) );
  }
}

export default App;
