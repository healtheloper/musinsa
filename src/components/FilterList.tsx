import styled from 'styled-components';

import FilterButton from '@components/FilterButton';
import Typography from '@components/Typography';
import SearchIcon from '@icons/Search';

const FilterListWrapper = styled.ul`
  display: flex;
  align-self: flex-start;
  gap: 5px;
`;

const FilterList: React.FC = () => (
  <FilterListWrapper>
    <li>
      <FilterButton>
        <Typography variant="body2">검색</Typography>
        <SearchIcon />
      </FilterButton>
    </li>
    <li>
      <FilterButton>
        <Typography variant="body2">세일상품</Typography>
      </FilterButton>
    </li>
    <li>
      <FilterButton>
        <Typography variant="body2">단독상품</Typography>
      </FilterButton>
    </li>
    <li>
      <FilterButton>
        <Typography variant="body2">품절포함</Typography>
      </FilterButton>
    </li>
  </FilterListWrapper>
);

export default FilterList;
