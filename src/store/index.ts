import { createContext, useContext } from 'react';

export const storesContext = createContext({});

export const useStores = () => useContext(storesContext);
