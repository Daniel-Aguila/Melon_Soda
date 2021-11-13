import React from 'react';
import {Form, Button} from 'react-bootstrap';
import PropTypes from 'prop-types';

export const UdpateTicket = ({msg, handleOnChange, handleOnSubmit}) => {
    return(
        <Form onSubmit={handleOnSubmit}>
            <Form.Label>Reply</Form.Label>
            <Form.Control
                as="textarea"
                row="5"
                name=""
                value={msg}
                onChange={handleOnChange}/>
                <Button variant="info" type="submit">Send Reply</Button>
        </Form>
    )
};

UdpateTicket.propTypes = {
    handleOnChange:PropTypes.func.isRequired,
    handleOnSubmit:PropTypes.func.isRequired,
    msg:PropTypes.array.isRequired,
};

