const axios = require('axios').default;

// const BASE_URL = 'https://delivery-app-eliftech-be.herokuapp.com/';
const BASE_URL = 'http://127.0.0.1:8000/';

export const getAllGoods = async () => {
  try {
    const res = await axios.get(BASE_URL);

    return res;
  } catch (err) {
    throw new Error('Error on getting data from DB', err.message);
  }
};

// export const sendCart = async payload => {
//   const body = payload;

//   try {
//     const res = await fetch(`${BASE_URL}cart-set`, {
//       method: 'POST',
//       headers: {},
//     });
//     const parsed = await res.json();
//     console.log(parsed);
//   } catch (err) {
//     console.error('Error on data fetch occures', err.message);
//   }
// };
