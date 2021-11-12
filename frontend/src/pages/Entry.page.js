import React, {useState} from 'react';
import './Entry.style.css';
import '../components/Login.comp';
import { LoginForm } from '../components/Login.comp';

export const Entry = () =>{
    //useState allows us to sate components
    //const [state, setstate] = useState('')
    //state is the variable and setstate is the function to update the variable state
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

const handleOnChange = event =>{
    const {name, value} = event.target

    switch(name){
        //Everytime it is an email/password, the value is set to its designated variable
        //using the setState function
        //for example, setEmail(value) where value = 'value_' will set the email variable to 'variable_'
        case 'email':
            setEmail(value)
            break
        case 'password':
            setPassword(value)
            break
            default:
                break
    }
    console.log(name, value);
};

const handleOnSubmit = event =>{
    //event.preventDefault() prevents the default behavior so we can do our own behavior
    event.preventDefault();
    //=====================================================================================================//
    //If you want to do more validation do it here
    if(!email || !password){
        alert("Melon Soda demands you fill all the necessary information")
    }
    //TODO Call the api to submit the form
};
    //We pass the handleOnChange function to the Login.comp.js file
    return (
        <div className="entry-page">
            <div className="jumbotron">
            <LoginForm handleOnChange={handleOnChange} email={email} pass={password} handleOnSubmit={handleOnSubmit}/>
            </div>
        </div>
    );
};