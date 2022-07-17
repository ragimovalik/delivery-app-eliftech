const axios = require('axios').default;

// const BASE_URL = 'http://127.0.0.1:8000/';

const BASE_URL = 'https://uhpv22.deta.dev/';

export const getAllGoods = async () => {
  try {
    const res = await axios.get(BASE_URL);

    return res;
  } catch (err) {
    throw new Error('Error on getting data from DB', err.message);
  }
};

export const sendCart = async payload => {
  try {
    const res = await axios.post(`${BASE_URL}cart-set`, payload);
    return res;
  } catch (err) {
    console.error('Error on data fetch occures', err.message);
  }
};
