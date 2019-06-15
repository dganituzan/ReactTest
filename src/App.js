import React, { Component } from 'react';
import Person from './Person/Person.js';
import './App.css';
import person from './Person/Person.js';

class App extends Component {
  state = {
    persons: [
      {name: 'Dganit', age: 24},
      {name: 'max', age: 28}
    ]
  }

  switchNameHandler =(newName)=> {
   // this.state.persons[0].name = 'Math.random()*30';
   this.setState({
    persons: [
      {name: newName, age: 24},
      {name: 'max', age: Math.random()}
    ]
   })
  }

  onChangeName =(event)=>{
    this.setState({
      persons: [
        {name: 'Dganit', age: 24},
        {name: event.target.value , age: Math.random()}
      ]
     })
  }

  render() {

    const styleButton ={
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
       <h1>hi im a react app </h1>
       <button
         style ={styleButton}
         onClick= {()=>this.switchNameHandler('arrow func')}>switch name</button>
       <Person 
        name={this.state.persons[0].name} 
        age= {this.state.persons[0].age}
        click= {this.switchNameHandler.bind(this,'with bind')}>
        test children </Person>
       <Person 
        name={this.state.persons[1].name} 
        age= {this.state.persons[1].age}
        changed = {this.onChangeName} >
        </Person>
      </div>
    );

   // return(React.createElement('div',{className: 'App'},React.createElement('h1',null,'It is working!!!!!')) );
  }
}

export default App;
