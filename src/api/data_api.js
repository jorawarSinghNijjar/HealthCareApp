const axios = require('axios');

export default axios.create({
    baseURL: 'https://patient-record-365.herokuapp.com'
});