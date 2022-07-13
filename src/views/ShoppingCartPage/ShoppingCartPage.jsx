import { useReducer } from 'react';
import InputBox from '../../modules/Form/InputBox/InputBox';
import GoodsInCart from '../../modules/CartBox/GoodsInCart';

import styles from './ShoppingCartPage.module.css';
import { useEffect } from 'react';

const initialState = { name: '', phone: '', email: '', address: '' };

const reducer = (state, action) => {
  switch (action.type) {
    case 'initial':
      return initialState;
    default:
      return { ...state, [action.type]: action.payload };
  }
};

const ShoppingCartPage = ({
  goods,
  onChangeQuantity,
  totalPrice,
  onSubmit,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const onInputChange = ({ target: { name, value } }) => {
    return dispatch({ type: name, payload: value.toLowerCase() });
  };

  useEffect(() => {
    dispatch({ type: 'initial' });
  }, []);

  return (
    <div className={styles.container}>
      <form onSubmit={event => onSubmit(event, state)}>
        <div className={styles.wrapper}>
          <InputBox onChange={onInputChange} />

          <GoodsInCart goods={goods} onChangeQuantity={onChangeQuantity} />
        </div>

        <div className={styles.summary}>
          <p>
            Total price: <span>${totalPrice}</span>
          </p>
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};

export default ShoppingCartPage;
