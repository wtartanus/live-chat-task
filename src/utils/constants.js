export const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

export const INVALID_PASSWORD_ERROR = 'Invalid password';
export const INVALID_EMAIL_ERROR = 'Invalid email';

export const APP_STATUS = Object.freeze({
  LOADING: 0,
  ERROR: 1,
  REGULAR: 2,
});
