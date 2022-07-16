import styled from 'styled-components';

import FilterButtonList from '@components/FilterButtonList';
import FilterConditionList from '@components/FilterConditionList';
import SearchInput from '@components/SearchInput';
import colors from '@constants/colors';

export const HEADER_PADDING_X = '10px';
export const HEADER_PADDING_Y = '40px';

const HeaderWrapper: React.FC<{ children: React.ReactNode }> = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${HEADER_PADDING_Y} ${HEADER_PADDING_X};
  gap: 20px;
  box-shadow: 0px 4px 10px rgba(51, 51, 51, 0.1),
    0px 0px 4px rgba(51, 51, 51, 0.05);
  background-color: ${colors.white};
  z-index: 2;
`;

const Header: React.FC = () => (
  <HeaderWrapper>
    <h1>MUSINSA</h1>
    <FilterButtonList />
    <SearchInput />
    <FilterConditionList />
  </HeaderWrapper>
);

export default Header;
