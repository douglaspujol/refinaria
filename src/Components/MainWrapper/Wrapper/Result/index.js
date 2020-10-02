/* eslint-disable */
import React from 'react';
import { useSelector } from 'react-redux';
import Card from './Card/index';

function Result() {
    const resultsRedux = useSelector(state => state.pesquisa.results);
    const totalResults = useSelector(state => state.pesquisa.total);

    return (
        <>
            {resultsRedux.length > 0
                ? resultsRedux.map(({ Title, Year, imdbID }) => (
                    <Card
                        key={imdbID}
                        Title={Title}
                        Year={Year}
                        imdbID={imdbID}
                    />
                ))
                : null}
        </>
    );
}

export default Result;
