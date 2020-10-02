/* eslint-disable react/prop-types */
import React from 'react';

import { useSelector } from 'react-redux';

function Wrapper({ children }) {
    const step = useSelector(state => state.pesquisa.step);
    const childrenArray = React.Children.toArray(children);
    const currentChild = childrenArray[step];

    return <>{currentChild}</>;
}

export default Wrapper;
