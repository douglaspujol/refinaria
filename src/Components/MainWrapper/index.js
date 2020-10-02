import React from 'react';

import Wrapper from './Wrapper/index';
import Error from './Wrapper/Error/index';
import Initial from './Wrapper/Initial/index';
import Result from './Wrapper/Result/index';
import HeaderResult from './HeaderResult/index';
import { Container } from './styles';
import Loading from './Wrapper/Loading/index';
import Infos from './Wrapper/Infos/index';

function MainWrapper() {
    return (
        <Container>
            <HeaderResult />
            <Wrapper>
                <Initial />
                <Result />
                <Error />
                <Loading />
                <Infos />
            </Wrapper>
        </Container>
    );
}

export default MainWrapper;
