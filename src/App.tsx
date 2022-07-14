import Header from '@components/Header';
import Main from '@components/Main';
import FilterProvider from '@contexts/FilterProvider';
import GlobalStyle from '@styles/GlobalStyle';

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <FilterProvider>
      <Header />
      <Main />
    </FilterProvider>
  </>
);

export default App;
