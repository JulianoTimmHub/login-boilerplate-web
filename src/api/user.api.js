import nextConfig from "../../next.config.mjs";
import { concatUrl } from "./api";

const { applicationName } = nextConfig.env;
const api = concatUrl('/user');

const application = {
  name: applicationName
}

export const registerUser = async ({ username, email, password }) => {
  return await api.post('/registerUser', { username, email, password, application })
    .then((res) => res)
    .catch((res) => res);
}