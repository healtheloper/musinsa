import styled from 'styled-components';

import FilterButton from '@components/FilterButton';
import Typography from '@components/Typography';
import filterList from '@constants/filterList';
import SearchIcon from '@icons/Search';

const Wrapper = styled.ul`
  display: flex;
  align-self: flex-start;
  gap: 5px;
`;

const FilterButtonList: React.FC = () => (
  <Wrapper>
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
  </Wrapper>
);

export default FilterButtonList;
