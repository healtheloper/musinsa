import styled from 'styled-components';

import Product from '@components/Product';

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

const ProductList: React.FC = () => (
  <ListWrapper>
    <Product />
    <Product />
    <Product />
    <Product />
    <Product />
  </ListWrapper>
);

export default ProductList;
