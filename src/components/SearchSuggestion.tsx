import styled from 'styled-components';

import colors from '@constants/colors';
import { useFilterValue } from '@contexts/FilterProvider';
import { useProductsState } from '@contexts/ProductsProvider';

const SuggestionWrapper = styled.ul`
  margin-top: 5px;
  border: 1px solid ${colors.grey5};
  background-color: ${colors.white};
  padding: 8px 14px;
`;

const Suggestion = styled.li`
  ${({ isLast }) => !isLast && `border-bottom: 1px solid ${colors.grey5};`}
  width: 100%;
  padding: 10px 0px;
`;

const SUGGESTION_COUNT = 5;

const SearchSuggestion: React.FC = () => {
  const { searchingKeyword } = useFilterValue();
  const [products] = useProductsState();
  const brandNames = products.map((product) => product.brandName);
  const goodsNames = products.map((product) => product.goodsName);
  const names = [...new Set([...brandNames, ...goodsNames])];
  const isSearchingKeywordEmpty = searchingKeyword === '';
  const suggestions = isSearchingKeywordEmpty
    ? []
    : names
        .filter((name) => name.includes(searchingKeyword))
        .slice(0, SUGGESTION_COUNT);

  return isSearchingKeywordEmpty ? null : (
    <SuggestionWrapper>
      {suggestions.map((suggestion, idx) => (
        <Suggestion isLast={idx === suggestions.length - 1}>
          {suggestion}
        </Suggestion>
      ))}
    </SuggestionWrapper>
  );
};

export default SearchSuggestion;