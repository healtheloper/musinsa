import { createContext, useContext, useMemo, useState } from 'react';

type FilterValueType = {
  selectedIds: number[];
  isSearching: boolean;
  searchKeyword: string;
};

type FilterActionsType = {
  toggleSelected: (id: number) => void;
  toggleIsSearching: () => void;
  updateSearchKeyword: (keyword: string) => void;
};

const initFilterValue = {
  selectedIds: [],
  isSearching: false,
  searchKeyword: '',
};

const FilterValueContext = createContext<FilterValueType>(initFilterValue);
const FilterActionsContext = createContext<FilterActionsType | null>(null);

const FilterProvider = ({ children }) => {
  const [filter, setFilter] = useState<FilterValueType>(initFilterValue);

  const actions = useMemo(
    () => ({
      toggleSelected(id: number) {
        if (filter.selectedIds.includes(id)) {
          setFilter({
            ...filter,
            selectedIds: filter.selectedIds.filter(
              (selectedId) => selectedId !== id,
            ),
          });
        } else {
          setFilter({
            ...filter,
            selectedIds: [...filter.selectedIds, id],
          });
        }
      },
      toggleIsSearching() {
        setFilter({
          ...filter,
          isSearching: !filter.isSearching,
        });
      },
      updateSearchKeyword(keyword: string) {
        setFilter({
          selectedIds: [...new Set([...filter.selectedIds, 0])],
          isSearching: false,
          searchKeyword: keyword,
        });
      },
    }),
    [filter],
  );

  return (
    <FilterActionsContext.Provider value={actions}>
      <FilterValueContext.Provider value={filter}>
        {children}
      </FilterValueContext.Provider>
    </FilterActionsContext.Provider>
  );
};

export const useFilterValue = () => {
  const value = useContext(FilterValueContext);
  if (!value) {
    throw new Error('useFilterValue should be used within FilterProvider');
  }
  return value;
};

export const useFilterActions = () => {
  const value = useContext(FilterActionsContext);
  if (!value) {
    throw new Error('useFilterActions should be used within FilterProvider');
  }
  return value;
};

export default FilterProvider;
