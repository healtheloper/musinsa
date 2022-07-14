import styled from 'styled-components';

import FilterList from '@components/FilterList';

const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;
`;

const Header: React.FC = () => (
  <HeaderWrapper>
    <h1>MUSINSA</h1>
    <FilterList />
  </HeaderWrapper>
);

export default Header;
