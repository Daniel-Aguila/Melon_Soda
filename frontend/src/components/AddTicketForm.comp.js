import React from "react";
import {Form,Button} from "react-bootstrap";
import PropTypes from 'prop-types';
import '../pages/AddTicket.style.css'

export const AddTicketForm = ({handleOnSubmit, handleOnChange, subject, date, description}) => {
    return(
        <div>
            <h1 className="text-center">New Ticket</h1>
            <hr/>
            <div className="jumbotron">
            <Form autoComplete="off" onSubmit={handleOnSubmit}>
                <Form.Group>
                    <Form.Label>Subject</Form.Label>
                    <Form.Control name="subject"  onChange={handleOnChange} value={subject} placeholder="Enter Subject" required/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Date</Form.Label>
                    <Form.Control type="date" name="date" onChange={handleOnChange} value={date} placeholder="dd/mm/yyyy" required/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Description</Form.Label>
                    <Form.Control name="description" onChange={handleOnChange} value={description} as="textarea" rows="5" cols="80" placeholder="Describe the issue at hand" required/>
                </Form.Group>
                <hr/>
                <div className="text-center">
                <Button type="submit" style={{'font-size':'2rem', padding:'10px 30px'}}>Submit New Ticket</Button>
                </div>
            </Form>
            </div>
        </div>
    )
};


AddTicketForm.propTypes = {
    handleOnChange: PropTypes.func.isRequired,
    handleOnSubmit: PropTypes.func.isRequired,
    subject: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};