import nextConfig from '../../next.config.mjs';
import { concatUrl } from './api';

const { applicationName } = nextConfig.env;
const api = concatUrl('/auth');

const application = {
  name: applicationName
}

export const signIn = async ({ email, password }) => {
  return await api.post('/signin', { email, password, application })
    .then((res) => res)
    .catch((res) => res);
}

export const logout = async () => {
  return await api.post('/logout', { email: null, application })
    .then((res) => res)
    .catch((res) => res);
}

export const recoverPassword = async ({ email, newPassword, confirmNewPassword }) => {
  return await api.post('/recoverPassword', { email, newPassword, confirmNewPassword, application })
    .then((res) => res)
    .catch((res) => res);
};