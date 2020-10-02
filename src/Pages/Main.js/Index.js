import React from 'react';
import FormWrapper from '../../Components/FormWrapper/index';
import MainWrapper from '../../Components/MainWrapper/index';
import { Container } from './styles';

function Main() {
    return (
        <Container>
            <FormWrapper />
            <MainWrapper />
        </Container>
    );
}

export default Main;
