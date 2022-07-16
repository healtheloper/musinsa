import { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import EmptyAlert from '@components/EmptyAlert';
import Product, { ProductType } from '@components/Product';
import { useFilterValue } from '@contexts/FilterProvider';
import { useProductsState } from '@contexts/ProductsProvider';
import useOnScreen from '@hooks/useOnScreen';

enum FilterProductEnum {
  'isSearched',
  'isSale',
  'isExclusive',
  'isSoldOut',
}

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
  const [products, setProducts] = useProductsState();
  const [goodsPage, setGoodsPage] = useState(0);
  const loaderRef = useRef(null);
  const { isIntersecting, unobserve } = useOnScreen(loaderRef);
  const { selectedIds, searchedKeyword } = useFilterValue();

  let filteredProducts = products;
  let isIncludingSoldOut = false;

  selectedIds.forEach((filterId) => {
    const filterOption = FilterProductEnum[filterId];
    if (filterOption === 'isSoldOut') {
      isIncludingSoldOut = true;
      return;
    }
    if (filterOption === 'isSearched') {
      filteredProducts = filteredProducts.filter(
        (product) =>
          product.goodsName.includes(searchedKeyword) ||
          product.brandName.includes(searchedKeyword),
      );
      return;
    }
    filteredProducts = filteredProducts.filter(
      (product) => product[filterOption],
    );
  });

  if (!isIncludingSoldOut) {
    filteredProducts = filteredProducts.filter((product) => !product.isSoldOut);
  }

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
    <>
      {filteredProducts.length ? (
        <ListWrapper>
          {filteredProducts.map((product: ProductType, idx) => (
            <Product key={`${idx}-${product.goodsNo}`} product={product} />
          ))}
        </ListWrapper>
      ) : (
        <EmptyAlert />
      )}
      <Loader ref={loaderRef} visible={filteredProducts.length !== 0} />
    </>
  );
};

export default ProductList;
