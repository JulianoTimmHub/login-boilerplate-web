import axios from "axios";
import nextConfig from '../../next.config.mjs';

const { 
  protocol,
  host,
  port
} = nextConfig.env;

export const apiPath = axios.create({
  baseURL: `${protocol}://${host}:${port}`
});

export const concatUrl = (urlPath) => {
  return axios.create({
    baseURL: apiPath.defaults.baseURL.concat(urlPath)
  })
};