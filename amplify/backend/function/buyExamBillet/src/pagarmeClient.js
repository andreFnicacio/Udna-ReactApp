const axios = require('axios');

const pagarmeAPI = axios.create({
  baseURL: 'https://api.pagar.me/1',
  timeout: 5000,
});

const PAGARME_API_KEY_DEV = 'ak_live_Y16bkcFcHW39fVWVhw13yw6C71HhZb';
const PAGARME_API_KEY_PRD = 'ak_live_Y16bkcFcHW39fVWVhw13yw6C71HhZb';

module.exports = { pagarmeAPI, PAGARME_API_KEY_DEV, PAGARME_API_KEY_PRD };
