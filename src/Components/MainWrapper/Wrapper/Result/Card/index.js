/* eslint-disable react/prop-types */
import React from 'react';

import { Container } from './styles';

function Card(props) {
    const { imdbID, Title, Year } = props;
    return (
        <Container>
            <h4>{Title}</h4>
            <p>Ano: {Year}</p>
            <button type="button">ver detalhes</button>
        </Container>
    );
}

export default Card;
