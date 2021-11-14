import React from 'react';
import {Button,Container,Row,Col} from 'react-bootstrap';
import {TicketTable} from '../components/TicketTable.comp';
import tickets from '../assets/data/dummy-tickets.json'
import { DefaultLayout } from '../layout/DefaultLayout';
import { Spinner } from 'react-bootstrap';
import './Dashboard.style.css'
export const Dashboard = () => {
    return(
        <DefaultLayout>
        <Container>

            <Row>
                {/* mt is margin top, and mb is margin bottom */}
            </Row>
            <div className="Home">
            <h1>Welcome to Melon Soda's CRM</h1>
            </div>
        </Container>
        </DefaultLayout>
    )
;}