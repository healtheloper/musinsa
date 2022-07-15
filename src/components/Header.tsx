import styled from 'styled-components';

import FilterButtonList from '@components/FilterButtonList';
import FilterConditionList from '@components/FilterConditionList';

const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 17px 0px;
  gap: 20px;
`;

const Header: React.FC = () => (
  <HeaderWrapper>
    <h1>MUSINSA</h1>
    <FilterButtonList />
    <FilterConditionList />
  </HeaderWrapper>
);

export default Header;
