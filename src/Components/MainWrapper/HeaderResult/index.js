import React from 'react';

import { useSelector } from 'react-redux';
import { Container } from './styles';

function HeaderResult() {
    const totalResults = useSelector(state => state.pesquisa.total);

    return (
        <Container>
            <h1>
                RESULTADOS DA BUSCA
                {totalResults && ` ( ${totalResults} RESULTADOS)`}
            </h1>
        </Container>
    );
}

export default HeaderResult;
