import React from 'react';
import { useSelector } from 'react-redux';

function Error() {
    const messageErr = useSelector(state => state.pesquisa.messageErr);

    return (
        <>
            <p>{messageErr}</p>
        </>
    );
}

export default Error;
