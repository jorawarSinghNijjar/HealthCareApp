const axios = require('axios');

const localURL = 'http://localhost:3001/';
const herokuURL = 'https://patient-record-365.herokuapp.com/';

export default axios.create({
    baseURL: herokuURL
});