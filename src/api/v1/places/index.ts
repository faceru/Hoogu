import RestAPI from 'api/restService';
import { AxiosResponse } from 'axios';

abstract class PlacesAPI {
  public static getPaymentSystems = (): Promise<AxiosResponse> =>
    RestAPI.get('/ActivityPlace/GetAllActivityPlaces');
}

export default PlacesAPI;
