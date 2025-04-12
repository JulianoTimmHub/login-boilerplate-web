import { concatUrl } from "./api";

const api = concatUrl('/token');

export const validateTokenApi = async () => {
  return await api.get('/validateToken', {})
    .then((res) => res)
    .catch((res) => res);
}