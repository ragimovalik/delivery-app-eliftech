import styles from './GoodsItem.module.css';

const GoodsItem = ({ item, onClick }) => {
  return (
    <li>
      <div className={styles.card}>
        <img
          src={item.img}
          alt={item.description}
          className={styles.card__image}
        />

        <p className={styles.card__title}>{item.title}</p>
        <button
          onClick={() => onClick(item._id)}
          type="button"
          className={styles.card__btn}
        >
          add to Cart
        </button>
      </div>
    </li>
  );
};

export default GoodsItem;
