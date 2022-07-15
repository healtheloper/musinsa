import { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import Product, { ProductType } from '@components/Product';
import useOnScreen from '@hooks/useOnScreen';

const MAX_GOODS_PAGE = 3;

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

const Loader = styled.div`
  display: ${({ visible }) => (visible ? 'block' : 'none')};
`;

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [goodsPage, setGoodsPage] = useState(0);
  const loaderRef = useRef(null);
  const { isIntersecting, unobserve } = useOnScreen(loaderRef);

  const fetchProducts = useCallback(async (page) => {
    const response = await fetch(
      `https://static.msscdn.net/musinsaUI/homework/data/goods${page}.json`,
    );
    const { data } = await response.json();
    setProducts((prevProducts) => [...prevProducts, ...data.list]);
  }, []);

  useEffect(() => {
    if (goodsPage <= MAX_GOODS_PAGE) {
      fetchProducts(goodsPage);
    }
  }, [fetchProducts, goodsPage]);

  useEffect(() => {
    if (isIntersecting) {
      setGoodsPage((prevPage) => prevPage + 1);
      if (goodsPage + 1 === MAX_GOODS_PAGE) {
        unobserve();
      }
    }
  }, [isIntersecting]);

  return (
    <ListWrapper>
      {products?.map((product: ProductType, idx) => (
        <Product key={`${idx}-${product.goodsNo}`} product={product} />
      ))}
      <Loader ref={loaderRef} visible={products.length !== 0} />
    </ListWrapper>
  );
};

export default ProductList;
