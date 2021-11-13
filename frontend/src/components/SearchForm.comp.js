import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

export const SearchForm = ({handleOnChange, search}) =>{
    return(
        <Form>
            <Form.Group as={Row}>
                <Form.Label column ms="3">Search: </Form.Label>
                <Col>
                <Form.Control name="search" onChange={handleOnChange} value={search} placeholder="Search..."/>
                </Col>
            </Form.Group>
        </Form>
    )
};

SearchForm.propTypes = {
    handleOnChange: PropTypes.func.isRequired,
    search: PropTypes.string.isRequired,
};