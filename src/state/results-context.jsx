import React, { createContext, useContext, useState } from 'react';

export const ResultsContext = createContext();

export const ResultsProvider = ({ children }) => {
  
  const [ results, setResults ] = useState([]);

  const resultsContext = {
    results, 
    setResults
  };
  
  return <ResultsContext.Provider value={ resultsContext }>{ children }</ResultsContext.Provider>
};

export const useResultsContext = () => useContext(ResultsContext);