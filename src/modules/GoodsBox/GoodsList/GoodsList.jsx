import GoodsItem from '../GoodsItem';
import styles from './GoodsList.module.css';

const GoodsList = ({ goods = [], title, addToCartHandler }) => {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.goods__title}>{title}</h3>
      <ul className={styles.goods}>
        {goods.map(item => (
          <GoodsItem key={item._id} item={item} onClick={addToCartHandler} />
        ))}
      </ul>
    </div>
  );
};

export default GoodsList;
