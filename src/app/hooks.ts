import { BaseQueryFn } from '@reduxjs/toolkit/query'
import axios, { AxiosRequestConfig, AxiosError } from 'axios'
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import type { RootState, AppDispatch } from "./store";

/* eslint-disable */
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;


export const axiosBaseQuery =
  (
    { baseUrl }: { baseUrl: string } = { baseUrl: '' }
  ): BaseQueryFn<
    {
      url: string
      method: AxiosRequestConfig['method']
      data?: AxiosRequestConfig['data']
    },
    unknown,
    unknown
  > =>
  async ({ url, method, data }) => {
    try {
      const result = await axios({ url: baseUrl + url, method, data })
      return { data: result.data }
    } catch (axiosError) {
      let err = axiosError as AxiosError
      return {
        error: { status: err.response?.status, data: err.response?.data },
      }
    }
  }
