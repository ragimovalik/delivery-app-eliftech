import styles from './ItemInCart.module.css';

const ItemInCart = ({ item, onChangeQuantity }) => {
  return (
    <li className={styles.card}>
      <img
        src={item.item.img}
        alt={item.item.description}
        className={styles.card__image}
      />
      <div className={styles.card__info}>
        <p>{item.item.title}</p>
        <p>
          Price: <span>{item.item.price}$</span>
        </p>
        <input
          type="number"
          name="quantity"
          id="quantity"
          min="1"
          max="50"
          value={item.quantity}
          onChange={e => onChangeQuantity(item.item._id, e.target.value)}
        />
      </div>
    </li>
  );
};

export default ItemInCart;
