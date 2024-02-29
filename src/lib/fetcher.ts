import { AxiosRequestConfig, AxiosResponse } from "axios";
import axios from 'axios'
import { Fetcher } from "swr";

// Define a custom fetcher function
const fetcher = async <T>([url, config]:[string, AxiosRequestConfig]) => {
  const response:AxiosResponse<T> = await axios.get(url, config);
  return response.data;
};

export default fetcher;
