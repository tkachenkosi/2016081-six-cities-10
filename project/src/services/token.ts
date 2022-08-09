const AUTH_TOKEN_KEY_NAME = 'six-cities-token';

export type Token = string;

export const getToken = (key: string = AUTH_TOKEN_KEY_NAME): Token => {
  // const token = localStorage.getItem(AUTH_TOKEN_KEY_NAME);
  const token = localStorage.getItem(key);
  return token ?? '';
};

export const saveToken = (token: Token): void => {
  localStorage.setItem(AUTH_TOKEN_KEY_NAME, token);
};

export const setToken = (key: string, value: string): void => {
  localStorage.setItem(key, value);
};

export const dropToken = (key: string = AUTH_TOKEN_KEY_NAME): void => {
  localStorage.removeItem(key);
};
