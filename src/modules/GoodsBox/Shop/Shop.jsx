import styles from './Shop.module.css';

const Shop = ({ shopName }) => {
  return (
    <>
      <li className={styles.shop}>{shopName}</li>
    </>
  );
};

export default Shop;
