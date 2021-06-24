import React, { createContext, useContext, useState } from 'react';

export const InputValueContext = createContext();

export const InputValueProvider = ({ children }) => {
  
  const [ inputValue, setInputValue ] = useState('');

  const inputValueContext = {
    inputValue, 
    setInputValue 
  };
  
  return <InputValueContext.Provider value={ inputValueContext }>{ children }</InputValueContext.Provider>
};

export const useInputValueContext = () => useContext(InputValueContext);