import { useEffect, useState } from 'react';
import styled from 'styled-components';

import Product, { ProductType } from '@components/Product';

const ListWrapper = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media only screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media only screen and (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const ProductList: React.FC = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        'https://static.msscdn.net/musinsaUI/homework/data/goods0.json',
      );
      const { data } = await response.json();
      setProducts(data.list);
    };
    fetchProducts();
  }, []);

  return (
    <ListWrapper>
      {products?.map((product: ProductType) => (
        <Product key={product.goodsNo} product={product} />
      ))}
    </ListWrapper>
  );
};

export default ProductList;
