import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Col, Row } from 'react-bootstrap';


export default class HistoricoProf extends React.Component {
    render() {
        return (
            <div>
                <Row>
                    <p><b>Histórico Profissional</b></p>
                    <hr size="2"></hr>
                </Row>
                <Row>
                    <Col sm={3} >
                        <div style={{textAlign: "center", flexWrap: 'wrap'}} >
                            <label style={{textAlign: "center", flexWrap: 'wrap'}} >Janeiro/2021 - Atualmente</label>  
                            <label style={{textAlign: "center", flexWrap: 'wrap'}} >Belo Horizonte - MG</label>            
                        </div>
                    </Col>
                    <Col sm={9}>
                        <p style={{flexWrap: 'wrap'}} ><b>Bwtech</b></p>
                        <p style={{textAlign: 'justify'}}>Passei a compor o quadro de funcionários da empresa Bwtech e fui integrado à equipe que realiza manutenção do sistema principal da empresa. Realizamos análises e implementações de novas funcionalidades no sistema além de correções de bugs, onde atuo de forma Fullstack, seguindo metodologias ágeis como Kanban e Scrum.</p>                    </Col>
                </Row>
                <hr size="1"></hr>
                <Row>
                    <Col sm={3} >
                        <div style={{textAlign: "center", flexWrap: 'wrap'}} >
                            <label style={{textAlign: "center"}} >Janeiro/2020 - Dezembro/2020</label>  
                            <label style={{textAlign: "center"}} >Guanhães - MG</label>            
                        </div>
                    </Col>
                    <Col sm={9}>
                        <p style={{flexWrap: 'wrap'}} ><b>Fácil Sistemas</b></p>
                        <p style={{textAlign: 'justify'}}>Fui integrado ao time de desenvolvimento da empresa matriz, na cidade de Guanhães-MG. Juntamente com o time continuamos a desenvolver funcionalidades novas e corrigindo os bugs que ocorriam no sistema e que eram reportados a nós pelos clientes.</p>
                    </Col>
                </Row>
                <hr size="1"></hr>
                <Row>
                    <Col sm={3} >
                        <div style={{textAlign: "center", flexWrap: 'wrap'}} >
                            <label style={{textAlign: "center"}} >Novembro/2018 - Dezembro/2019</label>  
                            <label style={{textAlign: "center"}} >São João Evangelista - MG</label>            
                        </div>
                    </Col>
                    <Col sm={9}>
                        <p style={{flexWrap: 'wrap'}} ><b>Fácil Sistemas</b></p>
                        <p style={{textAlign: 'justify'}}>Integrei um time de desenvolvimento remoto composto por 6 pessoas na empresa Fácil Sistemas LTDA. Trabalho realizado na cidade de São João Evangelista - MG de forma part-time (média de 6 horas/dia) com entrega junto da equipe de novas funcionalidades e correções de Bugs em módulos dos sistemas da empresa.</p>
                    </Col>
                </Row>
            </div>
        )
    }
}