import React from 'react';
import { Col, Row } from 'react-bootstrap';

export default class Realizacoes extends React.Component {
    render() {
        return(
            <div>
                <Row>
                    <p><b>Realizações</b></p>
                    <hr></hr>
                </Row>
                <Row>
                    <Col sm={3}></Col>
                    <Col sm={9}>
                        <li><p style={{textAlign: "justify"}}>Supervisor de uma equipe com 4 estagiários na cidade de São João Evangelista - MG, onde foram realizados treinamentos relacionados aos diversos módulos do sistema da empresa Fácil Sistemas.</p></li>
                        <li><p style={{textAlign: "justify"}}>Bolsista dos projetos “DESENVOLVIMENTO DE UM WEBSITE PARA O INCENTIVO DE DOAÇÕES A ENTIDADES FILANTRÓPICAS” e “ESTUDO EXPLORATÓRIO SOBRE SISTEMAS DE INFORMAÇÃO EM MICRO E PEQUENAS EMPRESAS NA REGIÃO DE SÃO JOÃO EVANGELISTA”.</p></li>
                        <li><p style={{textAlign: "justify"}}>Participante no colegiado do curso de Sistemas de Informação no Instituto Federal de Minas Gerais – Campus São João Evangelista.</p></li>
                    </Col>
                </Row>
            </div>                
        );
    }
}