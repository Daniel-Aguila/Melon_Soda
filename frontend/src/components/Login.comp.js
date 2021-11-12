import React from 'react';
import {Form, Container, Row, Col, Button} from 'react-bootstrap';
import PropTypes from 'prop-types';

export const LoginForm = ({handleOnChange, email, pass, handleOnSubmit}) =>{
    //We pass the handleOnChange function that was defined on Entry.page.js
    //This way it is called everytime the input for email/password is changed hence 'onChange'
    return(
        <div>
            <Container>
                <Row>
                    <Col>
                        <h1 className="text-center">Client Login</h1>
                        <hr/>
                        <Form autoComplete="off" onSubmit={handleOnSubmit}>
                            <Form.Group>
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" name="email" onChange={handleOnChange} value={email} placeholder="Enter Email" required/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" name="password" onChange={handleOnChange} value={pass} placeholder="Enter Password" required/>
                            </Form.Group>

                            <Button type="submit">Login</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
};

//We are using proptypes to verify what we are passing through components
//This verifies that we are receiving a function for handleOnChange, a string for email, and pass
// eslint-disable-next-line react/no-typos
LoginForm.propTypes = {
    handleOnChange: PropTypes.func.isRequired,
    handleOnSubmit: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
    pass: PropTypes.string.isRequired,
};