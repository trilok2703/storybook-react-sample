import React from 'react';
import Product from "./Product";

export default {
  title: 'Components/Product',
  component: Product,
};

// 👇 Each story is just a function that returns JSX
export const Iphone = () => <Product product="iPhone" />;
export const Samsung = () => <Product product="Samsung" />;
