import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    addResults,
    totalResult,
    select,
    changeStep,
    errorRequest,
} from '../../Store/modules/pesquisa/actions';

import { Container, Options } from './styles';
import api from '../../Services/api';

function FormWrapper() {
    const dispatch = useDispatch();
    const type = useSelector(state => state.pesquisa.type);
    const movie = useSelector(state => state.pesquisa.movie);
    const serie = useSelector(state => state.pesquisa.serie);

    const [valueInput, setValueInput] = React.useState('');

    function handleChange({ target }) {
        const { value } = target;
        setValueInput(value);
    }

    function handleClick(types) {
        dispatch(select(types));
    }

    async function handleSubmit(ev) {
        ev.preventDefault();
        if (valueInput.length < 3) {
            alert('coloca mais ai');
            return;
        }
        dispatch(changeStep(3));
        const response = await api.get('/', {
            params: {
                s: valueInput,
                type,
                page: 1,
            },
        });
        const { Response } = response.data;

        if (Response === 'True') {
            const { Search, totalResults } = response.data;
            dispatch(addResults(Search));
            dispatch(totalResult(totalResults));
            dispatch(changeStep(1));
        } else {
            const { Error } = response.data;
            dispatch(errorRequest(Error));
            dispatch(changeStep(2));
        }
    }

    return (
        <Container>
            <h1>PESQUISAR</h1>
            <p>O que desaja buscar?</p>
            <Options className="categorias">
                <button
                    className={type === movie ? 'select type' : 'type'}
                    type="button"
                    onClick={() => handleClick(movie)}
                >
                    FILMES
                </button>
                <button
                    className={type === serie ? 'select type' : 'type'}
                    type="button"
                    onClick={() => handleClick(serie)}
                >
                    SÉRIES
                </button>
            </Options>
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
