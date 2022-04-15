import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

export default class Contato extends React.Component {
    render() {
        return (
            <div>
                <Row>
                    <Col sm={3} />
                    <Col sm={9}>
                        <Row>
                            <Col><h5>CONTATOS</h5></Col>
                        </Row>
                        <Row>
                            <Col sm={6}>
                                <p><b>Residencial: </b>(33) 3423-1752</p>
                                <p><b>Celular: </b>(33) 99952-5766</p>
                                <p><b>Email: </b>victorpcarvalho18@gmail.com</p>
                                <p><b>LinkedIn: </b>victorcarvalho18</p>
                            </Col>
                            <Col sm={6}>
                                <p><b>Endereço: </b>Rua Dr. Marcelo Mafra, 193 A, Centro, Sabinópolis, Minas Gerais.</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        );
    }
}