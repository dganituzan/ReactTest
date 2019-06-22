import React , {Component} from 'react';
import Person from './Person/Person';



class Persons extends Component{ 

    shouldComponentUpdate(nextProps, nextState){
        console.log('person. js shouldcomponentupdate');
        if(nextProps.persons !== this.props.persons){
            return true;
        }else{
            return false;
        }
    }

    render(){
        return this.props.persons.map((person,index) =>{
            return (<Person 
            name={person.name} 
            age={person.age}
            click={()=>this.props.clicked(index)}
            changed = {(event)=>this.props.changed(event,person.id)}
            key={person.id} />);}
        );
    }
};

 export default Persons;