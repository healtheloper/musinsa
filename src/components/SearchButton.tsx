import styled from 'styled-components';

import { FilterButtonWrapper } from '@components/FilterButton';
import colors from '@constants/colors';
import { useFilterActions, useFilterValue } from '@contexts/FilterProvider';

type SearchButtonProps = {
  filterId: number;
  children?: React.ReactNode;
};

const SearchButtonWrapper = styled(FilterButtonWrapper)`
  ${({ isSearching }) =>
    isSearching
      ? `color: ${colors.white}; background-color: ${colors.blue};`
      : `color: ${colors.black};`}
`;

const SearchButton: React.FC<SearchButtonProps> = ({ filterId, children }) => {
  const { selectedIds, isSearching } = useFilterValue();
  const { toggleSelected, toggleIsSearching } = useFilterActions();
  const isSelected = selectedIds.includes(filterId);

  const handleSearchButtonClick = () => {
    toggleIsSearching();
  };

  return (
    <SearchButtonWrapper
      isSearching={isSearching}
      isSelected={isSelected}
      onClick={handleSearchButtonClick}
    >
      {children}
    </SearchButtonWrapper>
  );
};

export default SearchButton;
