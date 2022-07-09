import { useState } from 'react';
import GoodsList from '../../modules/GoodsBox/GoodsList';
import Shops from '../../modules/ShopsBox/ShopsList/Shops';

import styles from './ShopsPage.module.css';

import data from '../../data/data.json';

const shopsList = Object.keys(data);

const ShopsPage = () => {
  const [activeShop, setActiveShop] = useState('shop-1');

  const shopChangeHandler = e => setActiveShop(e.target.textContent);

  return (
    <div className={styles.container}>
      <Shops shopsList={shopsList} onClick={shopChangeHandler} />
      <GoodsList goods={data[activeShop]} title={activeShop} />
    </div>
  );
};

export default ShopsPage;
