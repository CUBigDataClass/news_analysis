import axios from 'axios';
const url = 'http://localhost:5000/';

export const fetchNews = () => axios.get(url);