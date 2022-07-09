import styles from './Shop.module.css';

const Shop = ({ shopName, onClick }) => {
  return (
    <>
      <li className={styles.shop}>
        <button onClick={onClick} type="button">
          {shopName}
        </button>
      </li>
    </>
  );
};

export default Shop;
