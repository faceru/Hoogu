import RestAPI from 'api/restService';
import { AxiosResponse } from 'axios';
import { Meta } from 'models/places/types';

abstract class PlacesAPI {
  public static getPlacesRequest = (): Promise<AxiosResponse> =>
    RestAPI.get('/ActivityPlace/GetAllActivityPlaces');

  public static getPlacesQueriesRequest = (params: Meta): Promise<AxiosResponse> =>
    RestAPI.post('/ActivityPlace/GetAllActivityPlaces', params);
}

export default PlacesAPI;
