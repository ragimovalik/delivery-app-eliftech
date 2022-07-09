import Shop from '../Shop/Shop';
import styles from './Shops.module.css';

const list = ['Mc Donny', 'CFK', 'Bread And Wine', 'Alco Heaven'];

const Shops = () => {
  return (
    <div className={styles.shops__box}>
      <h3 className={styles.shops__title}>Shops:</h3>
      <ul role="list" className={styles.shops__list}>
        {list.map(shop => (
          <Shop key={shop} shopName={shop} />
        ))}
      </ul>
    </div>
  );
};

export default Shops;
