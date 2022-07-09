import { ShopsPage, ShoppingCartPage } from './views';

export const routes = [
  {
    title: 'Shop',
    path: '/',
    component: <ShopsPage />,
  },
  {
    title: 'Cart',
    path: 'cart',
    component: <ShoppingCartPage />,
  },
];
