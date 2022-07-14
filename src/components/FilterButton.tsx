import styled from 'styled-components';

import colors from '@constants/colors';

type FilterButtonProps = {
  isFocusing?: boolean;
  isSelected?: boolean;
  children?: React.ReactNode;
};

const getFontColor = (isSelected: boolean, isFocusing: boolean) => {
  if (isFocusing) return colors.white;
  return isSelected ? colors.blue : colors.black;
};

const FilterButtonWrapper = styled.button<FilterButtonProps>`
  display: flex;
  align-items: center;
  gap: 2px;
  color: ${({ isSelected, isFocusing }) =>
    getFontColor(isSelected, isFocusing)};
  border: 1px solid ${colors.grey4};
  padding: 7px 15px;
  border-radius: 18px;
`;

const FilterButton: React.FC<FilterButtonProps> = ({
  isFocusing,
  isSelected,
  children,
}) => (
  <FilterButtonWrapper isFocusing={isFocusing} isSelected={isSelected}>
    {children}
  </FilterButtonWrapper>
);

export default FilterButton;
