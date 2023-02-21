import { makeAutoObservable } from 'mobx';
import { IAsyncUtil, IConstructorAsyncUtils, UNKNOWN_ERROR } from 'models/requestModel/types';
import { PlacesModel, Place } from 'models/places/types';
import SERVICE_API_V1 from 'api/v1';

interface PlacesRepository {
  new (): PlacesModel;
}

export class PlacesContoller {
  private placesModel: PlacesModel;

  private placesAsyncHelper: IAsyncUtil;

  private placesPostAsyncHelper: IAsyncUtil;

  get getPlacesModel(): PlacesModel {
    return this.placesModel;
  }

  get getPlacesAsyncHelper(): IAsyncUtil {
    return this.placesAsyncHelper;
  }

  get getPlacesPostAsyncHelper(): IAsyncUtil {
    return this.placesPostAsyncHelper;
  }

  getPlacesRequest = async (): Promise<void> => {
    this.placesAsyncHelper.startAsync();
    try {
      const { data } = await SERVICE_API_V1.PlacesAPI.getPlacesRequest();
      this.getPlacesRequestSuccess(data.data);
      this.placesAsyncHelper.successAsync();
    } catch (error) {
      const { errorMessage } = this.ormErrors(error);
      this.placesAsyncHelper.errorAsync(errorMessage);
    }
  };

  getPlacesPostRequest = async (params = this.placesModel.getPlacesMeta): Promise<void> => {
    this.placesPostAsyncHelper.startAsync();
    try {
      const { data } = await SERVICE_API_V1.PlacesAPI.getPlacesQueriesRequest(params);
      this.getPlacesRequestSuccess(data.data);
      this.getPlacesModel.setPlacesMeta(data.metaData);
      this.placesPostAsyncHelper.successAsync();
    } catch (error) {
      const { errorMessage } = this.ormErrors(error);
      this.placesPostAsyncHelper.errorAsync(errorMessage);
    }
  };

  private getPlacesRequestSuccess = (data: Place[]): void => {
    this.placesModel.setPlaces(data);
  };

  private ormErrors = (error: any) => {
    const errorMessage = error?.response?.data?.globalError || UNKNOWN_ERROR;
    const fieldErrors = error?.response?.data?.fieldErrors;
    return { errorMessage, fieldErrors };
  };

  constructor(PlacesEntity: PlacesRepository, AsyncHelper: IConstructorAsyncUtils) {
    this.placesModel = new PlacesEntity();
    this.placesAsyncHelper = new AsyncHelper();
    this.placesPostAsyncHelper = new AsyncHelper();
    makeAutoObservable(this);
  }
}
