/* eslint-disable  */
import React from 'react';

import { useSelector } from 'react-redux';
import { Container } from './styles';

function ResultsWrapper() {
    const resultsRedux = useSelector(state => state.pesquisa.results);
    const totalResults = useSelector(state => state.pesquisa.total);

    return (
        <Container>
            <h1>RESULTADOS DA BUSCA {totalResults && `(${totalResults} RESULTADOS)`}</h1>
            <p>Utilize o formulário ao lado para buscar um filme ou série.</p>
            {resultsRedux.length > 0
                ? resultsRedux.map(result => (
                    <div className="results" key={result.imdbID}>
                        <h4>{result.Title}</h4>
                        <p>Ano: {result.Year}</p>
                        <button type="button">ver detalhes</button>
                    </div>
                ))
                : null}
        </Container>
    );
}

export default ResultsWrapper;
