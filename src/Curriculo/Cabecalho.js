import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

export default class Cabecalho extends React.Component {
    render () {
        return (
            <div className='header'>
                <Row style={{height:100}} >
                    <Col sm={3} />
                    <Col sm={9}>
                        <div style={{paddingTop:10, color:'white'}}>Desenvolvedor de Software</div>
                        <div style={{paddingTop:10, color:'white'}}><h1>VICTOR CARVALHO</h1></div>
                    </Col>
                </Row>
            </div>
        );  
    }
}