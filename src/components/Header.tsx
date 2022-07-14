import styled from 'styled-components';

import FilterList from '@components/FilterList';

const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Header: React.FC = () => (
  <HeaderWrapper>
    <h1>MUSINSA</h1>
    <FilterList />
  </HeaderWrapper>
);

export default Header;
