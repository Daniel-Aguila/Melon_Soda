import React from 'react';
import {Button,Container,Row,Col} from 'react-bootstrap';
import {TicketTable} from '../components/TicketTable.comp';
import tickets from '../assets/data/dummy-tickets.json'
import { DefaultLayout } from '../layout/DefaultLayout';

export const Dashboard = () => {
    return(
        <DefaultLayout>
        <Container>
            <Row>
                {/* mt is margin top, and mb is margin bottom */}
                <Col className="text-center mt-5 mb-2">
                    <Button style={{'font-size':'2rem', padding:'10px 30px'}}>I am a Button that does not do anything</Button>
                </Col>
            </Row>
            <Row>
                {/* mt is margin top, and mb is margin bottom */}
            </Row>
            <hr/>
            <Row>
                <Col className="recent-ticket">
                    <TicketTable tickets={tickets}/>
                </Col>
            </Row>
        </Container>
        </DefaultLayout>
    )
;}