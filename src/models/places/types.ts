export interface Place {
  id: string;
  externalId: string;
  name: string;
  description: string;
  city: string;
  hugStreet: string;
  houseNumber: number | null;
  telephone1: string;
  telephone2: string;
  category: string;
  subCategory: string;
  type: string;
  special: string;
  price: number;
  ages: number | null;
  facebookLink: string | null;
  webLink: string | null;
  registrationLink: string | null;
  studioMatnas: string | null;
  contactName: string | null;
  closure: string | null;
  day1: string;
  day2: string;
  day3: string;
  hour1: string;
  hour2: string;
  hour3: string;
}

export enum FilterOperator {
  none,
  Contains,
  Equals,
  Like
}

export enum SortDirection {
  up = 1,
  down = 2
}

export interface Filter {
  columnName: string;
  filterOperator: FilterOperator;
  values: string[];
}

export interface SortingSettings {
  columnName: string;
  sortDirection: SortDirection;
}

export interface FilterSettings {
  filters: Filter[];
}

export interface Meta {
  page: number;
  rowsPerPage: number;
  offset: number;
  filterSettings: FilterSettings;
  sortingSettings: SortingSettings;
}

export interface PlacesModel {
  getPlaces: Place[];
  getPlacesMeta: Meta;
  setPlacesMeta(meta: Meta): void;
  setPlaces(places: Place[]): void;
}
