import GoodsItem from '../GoodsItem';
import styles from './GoodsList.module.css';

const GoodsList = ({ goods = [], title }) => {
  return (
    <div className={styles.wrapper}>
      <p>{title}</p>
      <ul role="list" className={styles.goods}>
        {goods.map(item => (
          <GoodsItem key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default GoodsList;
