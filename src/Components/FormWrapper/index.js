import React from 'react';
import { useDispatch } from 'react-redux';
import { addResults, totalResult } from '../../Store/modules/pesquisa/actions';

import { Container } from './styles';
import api from '../../Services/api';

function FormWrapper() {
    const dispatch = useDispatch();
    const [valueInput, setValueInput] = React.useState('');

    function handleChange({ target }) {
        const { value } = target;
        setValueInput(value);
    }

    async function handleSubmit(ev) {
        ev.preventDefault();
        if (valueInput.length < 3) {
            alert('coloca mais ai');
            return;
        }
        const response = await api.get('/', {
            params: {
                s: valueInput,
                type: 'movie',
                page: 1,
            },
        });
        const { Search, totalResults } = response.data;
        dispatch(addResults(Search));
        dispatch(totalResult(totalResults));
    }
    return (
        <Container>
            <h1>PESQUISAR</h1>
            <p>O que desaja buscar?</p>
            <div className="categorias">
                <button type="button">FILMES</button>
                <button type="button">SÉRIES</button>
            </div>
            <form onSubmit={handleSubmit}>
                <input
                    onChange={handleChange}
                    type="text"
                    placeholder="termo da busca (ex: back to the future)s"
                />
                <button type="submit">PESQUISAR</button>
            </form>
        </Container>
    );
}

export default FormWrapper;
