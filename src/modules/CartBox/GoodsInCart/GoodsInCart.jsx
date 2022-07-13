import styles from './GoodsInCart.module.css';

import ItemInCart from '../ItemInCart';

const GoodsInCart = ({ goods, onChangeQuantity, onItemDelete }) => {
  return (
    <div className={styles.wrapper}>
      <ul>
        {goods.map(item => (
          <ItemInCart
            key={item.item._id}
            item={item}
            onChangeQuantity={onChangeQuantity}
            onItemDelete={onItemDelete}
          />
        ))}
      </ul>
    </div>
  );
};

export default GoodsInCart;
