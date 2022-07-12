const axios = require('axios').default;

const BASE_URL = 'http://127.0.0.1:8000/';

export const getAllGoods = async () => {
  try {
    // const res = await fetch(BASE_URL, { method: 'GET' });
    const res = await axios.get(BASE_URL);

    return res;
  } catch (err) {
    console.error('Error on getting data from DB', err.message);
  }
};

export const sendCart = async payload => {
  const body = payload;

  try {
    const res = await fetch(`${BASE_URL}cart-set`, {
      method: 'POST',
      headers: {},
    });
    const parsed = await res.json();
    console.log(parsed);
  } catch (err) {
    console.error('Error on data fetch occures', err.message);
  }
};
