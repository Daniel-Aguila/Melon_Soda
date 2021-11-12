import React from 'react';
import {Button,Container,Row,Col} from 'react-bootstrap';
import {TicketTable} from '../components/TicketTable.comp';

export const Dashboard = () => {
    return(
        <Container>
            <Row>
                {/* mt is margin top, and mb is margin bottom */}
                <Col className="text-center mt-5 mb-2">
                    <Button style={{'font-size':'2rem', padding:'10px 30px'}}>Add New Ticket</Button>
                </Col>
            </Row>
            <Row>
                {/* mt is margin top, and mb is margin bottom */}
                <Col className="text-center mb-2">
                    <div>
                        Total Tickets: 50
                    </div>
                    <div>
                        Pending Tickets: 5
                    </div>
                </Col>
            </Row>
            <Row>
                {/* mt is margin top, and mb is margin bottom */}
                <Col className="text-center mb-2">
                    <div>
                        Recently Added Tickets
                    </div>
                </Col>
            </Row>
            <hr/>
            <Row>
                <Col className="recent-ticket">
                    <TicketTable/>
                </Col>
            </Row>
        </Container>
    )
}