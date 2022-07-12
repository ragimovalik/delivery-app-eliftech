import styles from './GoodsInCart.module.css';

import ItemInCart from '../ItemInCart';

const GoodsInCart = ({ goods, onChangeQuantity }) => {
  return (
    <div className={styles.wrapper}>
      <ul>
        {goods.map(item => (
          <ItemInCart
            key={item.item._id}
            item={item}
            onChangeQuantity={onChangeQuantity}
          />
        ))}
      </ul>
    </div>
  );
};

export default GoodsInCart;
