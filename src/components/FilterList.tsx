import styled from 'styled-components';

import FilterButton from '@components/FilterButton';
import Typography from '@components/Typography';
import filterList from '@constants/filterList';
import SearchIcon from '@icons/Search';

const FilterListWrapper = styled.ul`
  display: flex;
  align-self: flex-start;
  gap: 5px;
`;

const FilterList: React.FC = () => (
  <FilterListWrapper>
    <li>
      <FilterButton filterId={0}>
        <Typography variant="body2">검색</Typography>
        <SearchIcon />
      </FilterButton>
    </li>
    {filterList.map((filterItem) => (
      <li key={filterItem.id}>
        <FilterButton filterId={filterItem.id}>
          <Typography variant="body2">{filterItem.title}</Typography>
        </FilterButton>
      </li>
    ))}
  </FilterListWrapper>
);

export default FilterList;
