/* eslint-disable react/prop-types */
import React from 'react';

import { useDispatch } from 'react-redux';
import { Container } from './styles';
import {
    changeStep,
    idCard,
} from '../../../../../Store/modules/pesquisa/actions';

function Card(props) {
    const dispatch = useDispatch();

    const { imdbID, Title, Year } = props;
    function handleClick(id) {
        dispatch(idCard(id));
        dispatch(changeStep(4));
    }
    return (
        <Container>
            <h4>{Title}</h4>
            <p>Ano: {Year}</p>
            <button type="button" onClick={() => handleClick(imdbID)}>
                ver detalhes
            </button>
        </Container>
    );
}

export default Card;
