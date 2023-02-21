import { createContext, useContext } from 'react';
import { AsyncUtil } from 'models/requestModel';
import { PlacesEntity } from 'models/places';
import { PlacesContoller } from 'controllers/places';

export const storesContext = createContext({
  places: new PlacesContoller(PlacesEntity, AsyncUtil)
});

export const useStores = () => useContext(storesContext);
