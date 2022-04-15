import React from 'react';
import Competencias from './Competencias';
import Contato from './Contato';
import Formacao from './Formacao';
import HistoricoProf from './HistoricoProf';
import Realizacoes from './Realizacoes';
import Resumo from './Resumo';

export default class CorpoCurriculo extends React.Component {
    render() {
        return (
            <div>
                <Contato />
                <Resumo />
                <Formacao />
                <HistoricoProf />
                <Competencias />
                <Realizacoes />
            </div>
        );
    }
}