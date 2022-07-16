import Header from '@components/Header';
import Main from '@components/Main';
import FilterProvider from '@contexts/FilterProvider';
import ProductsProvider from '@contexts/ProductsProvider';
import GlobalStyle from '@styles/GlobalStyle';

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <ProductsProvider>
      <FilterProvider>
        <Header />
        <Main />
      </FilterProvider>
    </ProductsProvider>
  </>
);

export default App;
