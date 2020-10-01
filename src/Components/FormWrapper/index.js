import React from 'react';

import { Container } from './styles';

function FormWrapper() {
    return (
        <Container>
            <h1>PESQUISAR</h1>
            <p>O que desaja buscar?</p>
            <div className="categorias">
                <button type="button">FILMES</button>
                <button type="button">SÉRIES</button>
            </div>
            <form>
                <input
                    type="text"
                    placeholder="termo da busca (ex: back to the future) "
                />
                <button type="submit">PESQUISAR</button>
            </form>
        </Container>
    );
}

export default FormWrapper;
