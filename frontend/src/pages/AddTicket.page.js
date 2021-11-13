import React, {useState} from 'react'
import {Container,Row,Col,Form} from 'react-bootstrap'
import {AddTicketForm} from '../components/AddTicketForm.comp'
import './AddTicket.style.css';

export const AddTicket = () => {

    //useState allows us to sate components
    //const [state, setstate] = useState('')
    //state is the variable and setstate is the function to update the variable state
    const [subject, setSubject] = useState('');
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');

const handleOnChange = event =>{
    const {name, value} = event.target

    switch(name){
        case 'subject':
            setSubject(value)
            break
        case 'date':
            setDate(value)
            break
        case 'description':
            setDescription(value)
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
    if(!subject || !date || !description){
        alert("Melon Soda demands you fill all the necessary information")
    }
    //TODO Call the api to submit the form
};

    return (
            <Container>
                <Row>
                    <Col>
                        <AddTicketForm handleOnChange={handleOnChange} subject={subject} date={date} description={description} handleOnSubmit={handleOnSubmit}/>
                    </Col>
                </Row>
            </Container>
    )
};