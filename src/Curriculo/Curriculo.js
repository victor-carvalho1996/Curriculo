import { Row, Col, Container } from 'react-bootstrap';
import Cabecalho from './Cabecalho';
import React from 'react';
import CorpoCurriculo from './CorpoCurriculo/CorpoCurriculo';
 
export default class Curriculo extends React.Component {
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col> <Cabecalho/> </Col>
                    </Row>
                    <Row>
                        <Col> <CorpoCurriculo /> </Col>
                    </Row>
                </Container>
            </div>
          );
    }
}