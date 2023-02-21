import { makeAutoObservable } from 'mobx';
import { PlacesModel, Place, Meta, SortDirection } from './types';

export class PlacesEntity implements PlacesModel {
  private places: Place[] = [];

  private meta: Meta = {
    page: 1,
    rowsPerPage: 0,
    offset: 0,
    filterSettings: {
      filters: []
    },
    sortingSettings: {
      columnName: 'Id',
      sortDirection: SortDirection.down
    }
  };

  get getPlaces(): Place[] {
    return this.places;
  }

  get getPlacesMeta(): Meta {
    return this.meta;
  }

  setPlaces(places: Place[]) {
    this.places = places;
  }

  setPlacesMeta(meta: Meta) {
    this.meta = meta;
  }

  constructor() {
    makeAutoObservable(this);
  }
}
