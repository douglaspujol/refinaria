import React from 'react';
import { Provider } from 'react-redux';
import Main from './Pages/Main.js/Index';
import GlobalStyle from './styles/global';
import store from './Store';

function App() {
    return (
        <Provider store={store}>
            <Main />
            <GlobalStyle />
        </Provider>
    );
}

export default App;
