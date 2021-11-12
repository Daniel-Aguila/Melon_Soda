import React from "react";
import {Form, Container, Row, Col, Button} from "react-bootstrap";

export const AddTicketForm = () => {
    return(
        <div>
            <h1 className="text-center">New Ticket</h1>
            <hr/>
            <Form autoComplete="off">
                <Form.Group>
                    <Form.Label>Subject</Form.Label>
                    <Form.Control name="subject"  placeholder="Enter Email" required/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password"  placeholder="Enter Password" required/>
                </Form.Group>
                <hr/>
                <Button type="submit">Login</Button>
            </Form>
        </div>
    )
};