import React from 'react'
import {Form, Container, Row, Col, Button} from 'react-bootstrap'

export const LoginForm = () =>{
    return(
        <div>
            <Container>
                <Row>
                    <Col>
                        <h1 className="text-center">Client Login</h1>
                        <hr/>
                        <Form>
                            <Form.Group className="text-md-right">
                                <Form.Label column sm="5">Email</Form.Label>
                                <Form.Control type="email" name="email" placeholder="Enter Email" required/>
                            </Form.Group>
                            <Form.Group className="text-md-right">
                                <Form.Label column sm="7">Password</Form.Label>
                                <Form.Control type="password" name="password" placeholder="Enter Password" required/>
                            </Form.Group>

                            <Button type="submit">Login</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
};