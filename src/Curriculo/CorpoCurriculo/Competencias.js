import React from 'react';
import { Col, Row } from 'react-bootstrap';

export default class Competencias extends React.Component {
    render() {
        return(
            <div>
                <Row>
                    <p><b>Competências</b></p>
                    <hr></hr>
                </Row>
                <Row>
                    <Col sm={3}></Col>
                    <Col sm={9}>
                        <Col sm={6} style={{float: 'left'}}>
                            <li>Trabalho em equipe</li>
                            <li>Resolução de problemas</li>
                            <li>Boa comunicação</li>
                            <li>Flexibilidade</li>
                        </Col>
                        <Col sm={6} style={{float: 'right'}}>
                            <li>Inglês Básico (Curso em andamento)</li>
                            <li>Experiências em Delphi, java, VB.Net, PHP, Javascript, MySQL, Firebird, HTML e CSS</li>
                            <li>Conhecimentos em Git e API Rest</li>
                            <li>Estudo contínuo de novas tecnologias</li>
                        </Col>
                    </Col>
                </Row>
            </div>
        );
    }
}