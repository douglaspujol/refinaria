import axios from 'axios';

// cuidar versão do axios. A nova versão não envia parametros.
const myKey = '7747744a';
const api = axios.create({
    baseURL: 'http://www.omdbapi.com/',
    params: {
        apikey: myKey,
    },
});

export default api;
