import { concatUrl } from './api';

export const signIn = async ({ email, password }) => {
  const authApi = concatUrl('/auth');

  return await authApi.post('/signin', { email, password })
  .then((res) => res)
  .catch((res) => res);
}

export const recoverPassword = async ({ email, newPassword, confirmNewPassword }) => {
  const authApi = concatUrl('/auth');

  return await authApi.post('/recoverPassword', { email, newPassword, confirmNewPassword })
  .then((res) => res)
  .catch((res) => res);
};