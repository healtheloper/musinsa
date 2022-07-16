import { createContext, useContext, useState } from 'react';

import { ProductType } from '@components/Product';

const ProductsStateContext = createContext<
  [ProductType[], React.Dispatch<React.SetStateAction<ProductType[]>>] | null
>(null);

const ProductsProvider = ({ children }) => {
  const productsState = useState<ProductType[]>([]);

  return (
    <ProductsStateContext.Provider value={productsState}>
      {children}
    </ProductsStateContext.Provider>
  );
};

export const useProductsState = () => {
  const state = useContext(ProductsStateContext);
  if (!state) {
    throw new Error('useProductsState should be used within ProductsProvider');
  }
  return state;
};

export default ProductsProvider;
