import InputBox from '../../modules/Form/InputBox/InputBox';
import GoodsInCart from '../../modules/CartBox/GoodsInCart';

import styles from './ShoppingCartPage.module.css';

const ShoppingCartPage = ({ goods, onChangeQuantity, totalPrice }) => {
  return (
    <div className={styles.container}>
      <form>
        <div className={styles.wrapper}>
          <InputBox />
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
