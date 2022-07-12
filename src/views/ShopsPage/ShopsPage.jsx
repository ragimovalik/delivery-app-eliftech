import GoodsList from '../../modules/GoodsBox/GoodsList';
import Shops from '../../modules/ShopsBox/ShopsList/Shops';

import styles from './ShopsPage.module.css';

const ShopsPage = ({
  shopsList,
  shopChangeHandler,
  data,
  activeShop,
  addToCartHandler,
}) => {
  return (
    <div className={styles.container}>
      <Shops shopsList={shopsList} onClick={shopChangeHandler} />

      <GoodsList
        goods={data}
        title={activeShop}
        addToCartHandler={addToCartHandler}
      />
    </div>
  );
};

export default ShopsPage;
