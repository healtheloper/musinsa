import styled from 'styled-components';

import colors from '@constants/colors';
import { useFilterValue } from '@contexts/FilterProvider';
import SearchIcon from '@icons/SearchIcon';

const SearchInputBox = styled.div`
  width: 100%;
  background-color: ${colors.grey1};
  padding: 20px 15px;
`;

const SearchInputInner = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border: 1px solid ${colors.grey5};
  background-color: ${colors.white};
  padding: 8px 14px;
`;

const MyInput = styled.input`
  border: none;
  background-color: inherit;
  margin-left: 10px;
  width: 100%;
`;

const SearchInput: React.FC = () => {
  const { isSearching } = useFilterValue();

  return isSearching ? (
    <SearchInputBox>
      <SearchInputInner>
        <SearchIcon />
        <MyInput />
      </SearchInputInner>
    </SearchInputBox>
  ) : null;
};

export default SearchInput;
