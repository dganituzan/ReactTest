import React, { Component } from 'react';
import Person  from '../Components/Persons/Person/Person.js';
import classes from './App.css';
import Persons  from '../Components/Persons/Persons.js';
import Cockpit from '../Components/Cockpit/Cockpit.js';
import withClass from '../hoc/withClass.js';
import Auxilliary from '../hoc/Auxilliary.js';



class App extends Component {
  constructor(props){
    super(props);
  }

  state = {
    persons: [
      {id:'sdf', name: 'Dganit', age: 24},
      {id:'dgdf',name: 'max', age: 28}
    ],
    showPersons: false ,
    showCockpit: true , 
    changeCounter: 0
  }

  static getDrivedStateFromProps(props,state){
    return state;
  }

  componentDidMount(){
    
  }

  deletePersonHandler=(personIndex)=>{
    const persons = [...this.state.persons];
    //const persons = this.state.persons.slice();
    persons.splice(personIndex,1);
    this.setState({persons: persons});
  }

  onChangeName = (event,id)=>{
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

      this.setState((prevState,props)=>{
        return {persons: persons , 
        changeCounter: this.state.changeCounter+1 }}
        );
  }

  togglePersonHandler=()=>{
      const doesShow = this.state.showPersons;
      this.setState({showPersons: !doesShow})
  }


  render() {

    let persons = null;

    if(this.state.showPersons){
      persons=(
        <div>
          <Persons persons={this.state.persons}
                clicked = {this.deletePersonHandler}
                changed = {this.onChangeName}/>
            </div>);
          }

    return (
      <Auxilliary>
      <button onClick={()=>{this.setState({showCockpit: false});}}>remove cockpit</button>
          {this.state.showCockpit ? 
          <Cockpit showPersons={this.state.showPersons}
          personsLength={this.state.persons.length}
          click = {this.togglePersonHandler}
          title={this.props.appTitle}
        />
           : null }
          {persons}
          </Auxilliary>
    );
   // return(React. createElement('div',{className: 'App'},React.createElement('h1',null,'It is working!!!!!')) );
  }
}

export default withClass(App,classes.App);
