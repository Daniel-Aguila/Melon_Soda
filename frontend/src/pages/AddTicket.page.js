import React from 'react'
import {Container,Row,Col,Form} from 'react-bootstrap'
import {AddTicketForm} from '../components/AddTicketForm.comp'
import './AddTicket.style.css';

export const AddTicket = () => {
    return (
            <Container>
                <Row>
                    <Col>
                        <div className="Jumbotron">
                            <AddTicketForm/>
                        </div>
                    </Col>
                </Row>
            </Container>
    )
};