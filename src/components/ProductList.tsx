import { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import Product, { ProductType } from '@components/Product';

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

const observerOption = {
  rootMargin: '20px', // root 가 가진 여백
  threshold: 0, // 대상 요소가 몇 % 가 보여졌을 때 콜백을 실행할지
};

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [goodsPage, setGoodsPage] = useState(0);
  const loaderRef = useRef(null);

  const handleObserver = useCallback((entries) => {
    const target = entries[0];
    if (target.isIntersecting) {
      setGoodsPage((prevPage) => prevPage + 1);
    }
  }, []);

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
    const observer = new IntersectionObserver(handleObserver, observerOption);
    if (loaderRef.current) observer.observe(loaderRef.current);
  }, [handleObserver]);

  return (
    <ListWrapper>
      {products?.map((product: ProductType) => (
        <Product key={product.goodsNo} product={product} />
      ))}
      <div ref={loaderRef} />
    </ListWrapper>
  );
};

export default ProductList;
