import { makeAutoObservable } from 'mobx';
import { IAsyncUtil, TFieldErrors, Loading } from './types';

export class AsyncUtil implements IAsyncUtil {
  private loading: Loading = Loading.stable;

  private error: string = '';

  private message: string = '';

  private fieldErrors: { [key: string]: string } | null = null;

  get getLoadingState(): Loading {
    return this.loading;
  }

  get getErrorState(): string {
    return this.error;
  }

  get getFieldsErrorState(): { [key: string]: string } | null {
    return this.fieldErrors;
  }

  get getMessage(): string {
    return this.message;
  }

  startAsync = () => {
    this.loading = Loading.load;
    this.error = '';
    this.fieldErrors = null;
    this.message = '';
  };

  successAsync = (message?: string) => {
    this.loading = Loading.success;
    this.error = '';
    this.fieldErrors = null;
    this.message = message || '';
  };

  errorAsync = (message?: string, fields?: TFieldErrors) => {
    this.loading = Loading.error;
    this.error = message || '';
    this.fieldErrors = fields ? this.remapFieldsError(fields) : null;
    this.message = '';
  };

  reset = () => {
    this.loading = Loading.stable;
    this.error = '';
    this.fieldErrors = null;
    this.message = '';
  };

  private remapFieldsError = (fields?: TFieldErrors): { [key: string]: string } =>
    Object.entries(fields || {}).reduce((acc: any, [key, value]: any): any => {
      // eslint-disable-next-line prefer-destructuring
      acc[key] = value[0];
      return acc;
    }, {});

  constructor() {
    makeAutoObservable(this);
  }
}
