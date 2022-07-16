import styled from 'styled-components';

import { HEADER_PADDING_X } from '@components/Header';
import ProductList from '@components/ProductList';

const MainWrapper: React.FC<{ children: React.ReactNode }> = styled.main`
  margin-top: 250px;
  padding: 0 ${HEADER_PADDING_X};
`;

const Main: React.FC = () => (
  <MainWrapper>
    <ProductList />
  </MainWrapper>
);

export default Main;
