export class ApiMessageError extends Error {
  readonly name: string = '';

  response: { data: { globalError?: string } };

  constructor(message: string) {
    super(message);
    this.name = 'MessageError';
    this.response = {
      data: {
        globalError: message
      }
    };

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ApiMessageError);
    } else {
      this.stack = new Error().stack;
    }
  }
}
