import React from 'react';
import FormWrapper from '../../Components/FormWrapper/index';
import ResultsWrapper from '../../Components/ResultsWrapper/index';
import { Container } from './styles';

function Main() {
    return (
        <Container>
            <FormWrapper />
            <ResultsWrapper />
        </Container>
    );
}

export default Main;
