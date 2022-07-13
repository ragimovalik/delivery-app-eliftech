import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Toaster, toast } from 'react-hot-toast';

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

  /* Fetching all goods from DB when main page uploads.
     Transform data from DB to usable format 
     ({shopname: [items]}) */
  useEffect(() => {
    getAllGoods()
      .then(res => res.data)
      .then(result => {
        const transformedData = transformData(result.data);

        setShopsAndGoods(transformedData);
        setShopsList(Object.keys(transformedData));
      })
      .catch(err => console.error(err.message));
  }, []);

  /* Function to calculate total price of items in the cart.
     Function triggered when cart changes (items quantity changes).
  */
  const calcTotalPrice = cart.reduce((acc, el) => {
    let price = el.item.price;
    let quantity = el.quantity;

    return (acc += price * quantity);
  }, 0);

  useEffect(() => {
    setTotalPrice(calcTotalPrice);
  }, [cart]); // eslint-disable-line

  // Selects active shop to take goods of that shop
  let activeShopGoods = shopsAndGoods[activeShop];
  const shopChangeHandler = e => setActiveShop(e.target.textContent);

  /* Function to add items to cart. 
  Triggered when user clicks on 'add to cart' button */
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

  // Function to change quantity of items in cart.
  const changeQuantity = (id, num) => {
    let newCart = [...cart];
    let itemInCartIndex = cart.findIndex(el => el.item._id === id);

    newCart[itemInCartIndex].quantity = num;
    setCart(newCart);
  };

  /* Sends order when form subbmitted. 
     Gets items in cart and buyer info.
     Order will be saved in DB */
  const submitHandler = (e, state) => {
    e.preventDefault();

    console.log(state);

    // TODO - use fetch function
    cart.length > 0
      ? sendCart({ buyer: state, goods: cart })
      : toast.error('Please add some goods to the cart');

    e.target.reset();
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
          path="/cart"
          title="Cart"
          element={
            <ShoppingCartPage
              goods={cart}
              totalPrice={totalPrice}
              onChangeQuantity={changeQuantity}
              onSubmit={submitHandler}
            />
          }
        />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
