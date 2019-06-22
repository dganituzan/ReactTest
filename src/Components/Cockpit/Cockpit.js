import React, {useEffect} from 'react';
import classes from './Cockpit.css'


const cockpit =(props)=>{

    useEffect(()=>{
        setTimeout(()=>{
            alert('saved data to cloud');
        },1000);
        }, []);
    

    const assignedClasses = [];
    let btnClass='';
    if(props.showPersons){
        btnClass = classes.Red;
    }
    if(props.personsLength <= 2){
      assignedClasses.push(classes.red);
    }
    if(props.personsLength<=1 ){
      assignedClasses.push(classes.bold);
    }
    
    return(
    <div>
        <h1 >{props.title}</h1>
       <p className={assignedClasses.join(' ')}>test style</p>
       <button
        className ={btnClass}
        onClick= {props.click}>show persons</button>
    </div>
    );
}


export default React.memo(cockpit);