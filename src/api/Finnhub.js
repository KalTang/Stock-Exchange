import axios from 'axios';
import { API_KEY } from 'dotenv';

export default axios.create({
    baseURL: 'https://finnhub.io/api/v1/',
    headers: {
        Authorization: `X-Finnhub-Token : ${API_KEY}`,
    },
});
