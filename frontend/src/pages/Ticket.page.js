import React, { useEffect, useState } from 'react';
import {Container, Col, Row, Button} from 'react-bootstrap';
import tickets from '../assets/data/dummy-tickets.json'
import { MessageHistory } from '../components/MessageHistory.comp';
import { UdpateTicket } from '../components/UpdateTicket.comp';
import { DefaultLayout } from '../layout/DefaultLayout';

const ticket = tickets[0];
export const Ticket = () =>{
    const [msg,setMsg] = useState('')

    useEffect(() =>{

    },[msg])

    const handleOnChange = event =>{
        setMsg(event.target.value);
    };

    const handleOnSubmit = () =>{
        alert('replied')
    };

    return(
        <DefaultLayout>
        <Container>
            <Row>
                <Col>
                    <div className="subject">Subject: {ticket.subject}</div>
                    <div className="date">Date {ticket.addedAt}</div>
                    <div className="status">Status {ticket.status}</div>
                </Col>
                <Col className="text-right">
                    <Button style={{'fontSize':'1rem', padding:'10px 30px'}}>Close Ticket</Button>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col>
                <MessageHistory msg={ticket.history}/>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col>
                <UdpateTicket msg={msg} handleOnChange={handleOnChange} handleOnSubmit={handleOnSubmit}/>
                </Col>
            </Row>
        </Container>
        </DefaultLayout>
    )
};