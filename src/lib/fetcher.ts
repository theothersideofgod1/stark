import { AxiosRequestConfig, AxiosResponse } from "axios";
import axios from 'axios'
import { Fetcher } from "swr";

// Define a custom fetcher function
const fetcher = async <T>(url:string, config:AxiosRequestConfig) => {
  const { data }:AxiosResponse<T> = await axios.get<T>(url, config);
  return data
};

export default fetcher;
