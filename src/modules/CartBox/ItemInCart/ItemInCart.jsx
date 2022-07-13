import { MdDelete } from 'react-icons/md';
import styles from './ItemInCart.module.css';

const ItemInCart = ({ item, onChangeQuantity, onItemDelete }) => {
  return (
    <li className={styles.card}>
      <img
        src={item.item.img}
        alt={item.item.description}
        className={styles.card__image}
      />
      <div className={styles.card__info}>
        <h5 className={styles.card__title}>{item.item.title}</h5>
        <p>
          Price: <span>{item.item.price}$</span>
        </p>
        <label htmlFor="quantity">Quantity:</label>
        <input
          type="number"
          name="quantity"
          id="quantity"
          min="1"
          max="50"
          value={item.quantity}
          onChange={e => onChangeQuantity(item.item._id, e.target.value)}
        />

        <MdDelete
          onClick={() => onItemDelete(item.item._id)}
          className={styles.card__delButton}
          size="20px"
        />
      </div>
    </li>
  );
};

export default ItemInCart;
