import Shop from '../Shop/Shop';
import styles from './Shops.module.css';

const Shops = ({ shopsList, onClick }) => {
  return (
    <div className={styles.shops__box}>
      <h3 className={styles.shops__title}>Shops:</h3>
      <ul role="list" className={styles.shops__list}>
        {shopsList.map(shop => (
          <Shop key={shop} shopName={shop} onClick={onClick} />
        ))}
      </ul>
    </div>
  );
};

export default Shops;
