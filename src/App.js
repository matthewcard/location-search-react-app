import React from 'react';
import styled from '@emotion/styled';
import ResultsList from './components/results-list';
import SearchBox from './components/search-box';
import Header from './components/header';
import { ResultsProvider } from '../src/state/results-context';
import { InputValueProvider } from '../src/state/input-value-context';
import { ReactComponent as Logo } from './logo.svg'

const Wrap = styled.div`
  text-align: center;
  margin-top: 3rem;
`;

function App() {
  return (
    <ResultsProvider>
    <InputValueProvider>
      <Wrap>
        <Logo/>
        <Header/>
        <SearchBox/>
        <ResultsList/>
      </Wrap>
    </InputValueProvider> 
    </ResultsProvider>
  );
}

export default App;
