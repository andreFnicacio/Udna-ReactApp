import * as axios from "axios";

const pagarmeAPI = axios.create({
  baseURL: 'https://api.pagar.me/1',
  timeout: 5000,
});

const PAGARME_API_KEY_DEV = 'ak_live_AtbUQ7qSpyrFNR5ziHLYkxOQZ7txoi';
const PAGARME_API_KEY_PRD = 'ak_live_AtbUQ7qSpyrFNR5ziHLYkxOQZ7txoi';

module.exports = { pagarmeAPI, PAGARME_API_KEY_DEV, PAGARME_API_KEY_PRD };
