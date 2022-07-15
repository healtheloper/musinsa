import { useRef } from 'react';
import styled from 'styled-components';

import colors from '@constants/colors';
import { useFilterActions, useFilterValue } from '@contexts/FilterProvider';
import SearchIcon from '@icons/SearchIcon';

const SearchInputBox = styled.form`
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
  const { updateSearchKeyword } = useFilterActions();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (!inputRef.current) return;
    updateSearchKeyword(inputRef.current.value);
  };

  return isSearching ? (
    <SearchInputBox onSubmit={handleSearchSubmit}>
      <SearchInputInner>
        <button type="submit">
          <SearchIcon />
        </button>
        <MyInput ref={inputRef} />
      </SearchInputInner>
    </SearchInputBox>
  ) : null;
};

export default SearchInput;
