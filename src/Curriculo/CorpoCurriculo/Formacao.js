import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Col, Row } from 'react-bootstrap';
import '../index.css';

export default class Formacao extends React.Component {

    render() {
        return (
            <div>
                <Row>
                    <p><b>Formação</b></p>
                    <hr></hr>
                </Row>
                <Row>
                    <Col sm={3} >
                        <div style={{textAlign: "center"}} >                      
                            Dezembro  - 2019
                        </div>
                    </Col>
                    <Col sm={9}>
                        <p>Bacharel em Sistemas de Informação pelo Instituto Federal de Minas Gerais - São João Evangelista - MG</p>
                    </Col>
                </Row>
            </div>
        )
    }
}