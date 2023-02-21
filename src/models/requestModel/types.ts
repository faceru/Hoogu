export interface IConstructorAsyncUtils {
  new (): IAsyncUtil;
}

export enum Loading {
  stable,
  load,
  error,
  success
}

export interface TFieldErrors {
  [key: string]: Array<string>;
}

export interface IAsyncUtil {
  getLoadingState: Loading;
  getErrorState: string;
  getFieldsErrorState: any;
  getMessage: string;
  startAsync(): void;
  successAsync(message?: string): void;
  errorAsync(message?: string, fields?: TFieldErrors): void;
  reset(): void;
}

export const UNKNOWN_ERROR = 'что-то пошло не так';
