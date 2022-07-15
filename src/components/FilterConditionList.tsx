import styled from 'styled-components';

import Typography from '@components/Typography';
import colors from '@constants/colors';
import DeleteIcon from '@icons/DeleteIcon';
import RefreshIcon from '@icons/RefreshIcon';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const ConditionWrapper = styled.div`
  display: flex;
  gap: 5px;
`;

const FilterCondition = styled.div`
  display: flex;
  gap: 7px;
  align-items: center;
  background-color: ${colors.blue};
  padding: 4px 8px;
  border-radius: 4px;
  color: ${colors.white};
`;

const DeleteButton = styled.button`
  cursor: pointer;
`;

const FilterConditionList: React.FC = () => (
  <Wrapper>
    <ConditionWrapper>
      <FilterCondition>
        <Typography variant="body3">세일상품</Typography>
        <DeleteButton type="button">
          <DeleteIcon />
        </DeleteButton>
      </FilterCondition>
      <FilterCondition>
        <Typography variant="body3">단독상품</Typography>
        <DeleteButton type="button">
          <DeleteIcon />
        </DeleteButton>
      </FilterCondition>
      <FilterCondition>
        <Typography variant="body3">품절포함</Typography>
        <DeleteButton type="button">
          <DeleteIcon />
        </DeleteButton>
      </FilterCondition>
    </ConditionWrapper>
    <RefreshIcon />
  </Wrapper>
);

export default FilterConditionList;
