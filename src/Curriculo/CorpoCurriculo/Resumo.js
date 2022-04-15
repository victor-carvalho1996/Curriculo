import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Col, Row } from 'react-bootstrap';

export default class Resume extends React.Component {
    render() {
        return (
            <div>
                <Row>
                    <p><b>Resumo Profissional</b></p>
                    <hr></hr>
                </Row>
                <Row>
                    <Col sm={3} />
                    <Col sm={9}>
                        <p>Desenvolvedor de software dedicado e esforçado onde realizo novas implementações ou correções em sistemas, assim buscando entregar excelência e qualidade para cliente final.</p>
                    </Col>
                </Row>
            </div>
        )    
    }
}