import axios from 'axios';

import { maskRemoveService } from './maskService';

const viaCepAPI = axios.create({
  baseURL: 'https://viacep.com.br/ws',
  timeout: 5000,
  headers: { 'X-Custom-Header': 'foobar' },
});


const searchAddressService = async (zipCode) => {
  try {
    const ziCodeClean = maskRemoveService(zipCode);
    const res = await viaCepAPI.get(`/${ziCodeClean}/json/`);

    return [null, res.data];
  } catch (error) {
    return [error, null];
  }
};

export { searchAddressService };
