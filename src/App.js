import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './modules/Header';
import { ShopsPage, ShoppingCartPage } from './views';
import { getAllGoods, sendCart } from './shared/helpers/api';

import { transformData } from './shared/helpers/transformData';

function App() {
  const [shopsAndGoods, setShopsAndGoods] = useState([]);
  const [shopsList, setShopsList] = useState([]);
  const [cart, setCart] = useState([]);
  const [activeShop, setActiveShop] = useState('shop-1');
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    getAllGoods()
      .then(({ data }) => data.data)
      .then(result => {
        const transformedData = transformData(result);

        setShopsAndGoods(transformedData);
        setShopsList(Object.keys(transformedData));
      })
      .catch(err => console.error(err.message));
  }, []);

  const calcTotalPrice = cart.reduce((acc, el) => {
    let price = el.item.price;
    let quantity = el.quantity;

    return (acc += price * quantity);
  }, 0);

  useEffect(() => {
    setTotalPrice(calcTotalPrice);
  }, [cart]);

  let activeShopGoods = shopsAndGoods[activeShop];

  const shopChangeHandler = e => setActiveShop(e.target.textContent);

  const addToCartHandler = id => {
    const itemToCart = activeShopGoods.find(item => item._id === id);
    let itemInCartIndex = cart.findIndex(el => el.item._id === itemToCart._id);

    let newCart = [...cart];

    if (itemInCartIndex === -1) {
      newCart = [...newCart, { item: itemToCart, quantity: 1 }];

      setCart(newCart);
    } else {
      newCart[itemInCartIndex].quantity = newCart[itemInCartIndex].quantity + 1;
      setCart(newCart);
    }
  };

  const changeQuantity = (id, num) => {
    let newCart = [...cart];
    let itemInCartIndex = cart.findIndex(el => el.item._id === id);

    newCart[itemInCartIndex].quantity = num;
    setCart(newCart);
  };

  return (
    <div>
      <Header cart={cart} />
      <Routes>
        <Route
          path="/"
          title="Shop"
          element={
            <ShopsPage
              shopsList={shopsList}
              shopChangeHandler={shopChangeHandler}
              addToCartHandler={addToCartHandler}
              data={shopsAndGoods[activeShop]}
              activeShop={activeShop}
            />
          }
        />

        <Route
          path="cart"
          title="Cart"
          element={
            <ShoppingCartPage
              goods={cart}
              totalPrice={totalPrice}
              onChangeQuantity={changeQuantity}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
