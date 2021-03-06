import styled from 'styled-components';

import colors from '@constants/colors';
import { useFilterActions, useFilterValue } from '@contexts/FilterProvider';

type FilterButtonProps = {
  filterId: number;
  children: React.ReactNode;
};

interface IFilterButton extends React.HTMLProps<IFilterButton> {
  isSelected?: boolean;
}

export const FilterButtonWrapper: React.FC<IFilterButton> = styled.button<{
  isSelected: boolean;
}>`
  display: flex;
  align-items: center;
  gap: 2px;
  color: ${({ isSelected }) => (isSelected ? colors.blue : colors.black)};
  border: 1px solid ${colors.grey4};
  padding: 7px 15px;
  border-radius: 18px;
  cursor: pointer;
`;

const FilterButton: React.FC<FilterButtonProps> = ({ filterId, children }) => {
  const { selectedIds } = useFilterValue();
  const { toggleSelected } = useFilterActions();
  const isSelected = selectedIds.includes(filterId);

  const handleFilterButtonClick = () => {
    toggleSelected(filterId);
  };

  return (
    <FilterButtonWrapper
      isSelected={isSelected}
      onClick={handleFilterButtonClick}
    >
      {children}
    </FilterButtonWrapper>
  );
};

export default FilterButton;
