import styled from 'styled-components';

import FilterButton from '@components/FilterButton';
import SearchButton from '@components/SearchButton';
import Typography from '@components/Typography';
import filterList from '@constants/filterList';
import SearchIcon from '@icons/SearchIcon';

const Wrapper: React.FC<{ children: React.ReactNode }> = styled.ul`
  display: flex;
  align-self: flex-start;
  gap: 5px;
`;

const FilterButtonList: React.FC = () => (
  <Wrapper>
    <li>
      <SearchButton filterId={0}>
        <Typography variant="body2">검색</Typography>
        <SearchIcon />
      </SearchButton>
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
