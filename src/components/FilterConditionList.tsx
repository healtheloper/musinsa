import styled from 'styled-components';

import Typography from '@components/Typography';
import colors from '@constants/colors';
import { useFilterActions, useFilterValue } from '@contexts/FilterProvider';
import DeleteIcon from '@icons/DeleteIcon';
import RefreshIcon from '@icons/RefreshIcon';

enum FilterConditionEnum {
  '검색',
  '세일상품',
  '단독상품',
  '품절포함',
}

const Wrapper: React.FC<{ children: React.ReactNode }> = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const ConditionWrapper: React.FC<{ children: React.ReactNode }> = styled.div`
  display: flex;
  gap: 5px;
`;

const FilterCondition: React.FC<{ children: React.ReactNode }> = styled.div`
  display: flex;
  gap: 7px;
  align-items: center;
  background-color: ${colors.blue};
  padding: 4px 8px;
  border-radius: 4px;
  color: ${colors.white};
`;

const DeleteButton: React.FC<
  React.HTMLProps<HTMLButtonElement>
> = styled.button`
  cursor: pointer;
`;

const searchFilterId = 0;

const FilterConditionList: React.FC = () => {
  const { selectedIds, searchedKeyword } = useFilterValue();
  const { toggleSelected } = useFilterActions();

  return selectedIds.length ? (
    <Wrapper>
      <ConditionWrapper>
        {selectedIds.map((selectedId) => (
          <FilterCondition key={selectedId}>
            <Typography variant="body3">
              {selectedId === searchFilterId
                ? searchedKeyword
                : FilterConditionEnum[selectedId]}
            </Typography>
            <DeleteButton
              type="button"
              onClick={() => {
                toggleSelected(selectedId);
              }}
            >
              <DeleteIcon />
            </DeleteButton>
          </FilterCondition>
        ))}
      </ConditionWrapper>
      <RefreshIcon />
    </Wrapper>
  ) : null;
};

export default FilterConditionList;
