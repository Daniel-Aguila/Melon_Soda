import React from 'react';
import {Container, Row, Col, Table, Button} from 'react-bootstrap';
import { SearchForm } from './SearchForm.comp';
import PropTypes from 'prop-types';
import {TicketTable} from '../components/TicketTable.comp'
import tickets from '../assets/data/dummy-tickets.json'

export const TicketListTable = ({handleOnChange, search}) =>{
    return(
    <Container>
        <Row>
            <Col>
            
            </Col>
        </Row>
        <Row className="mt-5">
            <Col>
                <Button variant="info"> Add New Ticket </Button>
            </Col>
            <Col className="text-right">Search Form</Col>
            <SearchForm handleOnChange={handleOnChange} search={search}/>
        </Row>
        <hr/>
        <Row>
            <Col>
                <TicketTable tickets={tickets}/>
            </Col>
        </Row>
    </Container>
    )
};

TicketListTable.propTypes = {
    handleOnChange: PropTypes.func.isRequired,
    search: PropTypes.string.isRequired,
};