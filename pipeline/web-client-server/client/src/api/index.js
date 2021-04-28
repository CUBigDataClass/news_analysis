import axios from 'axios';
// 'server' is the name of our api service
const url = 'http://server:5000/';

export const fetchNews = () => axios.get(url);