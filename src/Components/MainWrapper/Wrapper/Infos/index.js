/* eslint-disable */
import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Container } from './styles';
import api from '../../../../Services/api';
import { changeStep } from '../../../../Store/modules/pesquisa/actions';

function Infos() {
    const dispatch = useDispatch();
    const [load, setLoad] = React.useState(false);
    const id = useSelector(state => state.pesquisa.idCard);
    const [infos, setInfos] = React.useState({
        Poster: '',
        Title: '',
        Genre: '',
        Director: '',
        Actors: '',
        Year: '',
    });
    React.useEffect(() => {
        async function getInfos() {
            setLoad(true);
            const response = await api.get('/', {
                params: {
                    i: id,
                },
            });
            const {
                Poster,
                Title,
                Genre,
                Director,
                Actors,
                Year,
            } = response.data;
            const objectData = {
                Poster,
                Title,
                Genre,
                Director,
                Actors,
                Year,
            };
            setInfos(objectData);
            setLoad(false);
        }

        getInfos();
    }, []);
    function handleClick() {
        dispatch(changeStep(1));
    }
    return (
        <Container>
            {load ? (
                <p>Carregando</p>
            ) : (
                    <>
                        <h1>{infos.Title}</h1>
                        <img src={infos.Poster} alt={infos.Title} />
                        <p>
                            <strong>Ano: </strong> {infos.Year}
                        </p>
                        <p>
                            <strong> Gênero(s): </strong> {infos.Genre}
                        </p>
                        <p>
                            <strong> Diretor: </strong> {infos.Director}
                        </p>
                        <p>
                            <strong> Atores: </strong>
                            {infos.Actors}
                        </p>
                        <button type="button" onClick={handleClick}>
                            Voltar
                    </button>
                    </>
                )}
        </Container>
    );
}

export default Infos;
