import axios from 'axios';

const apibrasil = axios.create({
    baseURL: 'https://brasilapi.com.br/api/'
});

export default apibrasil;