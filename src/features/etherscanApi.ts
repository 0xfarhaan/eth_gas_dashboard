import { createApi } from "@reduxjs/toolkit/query/react";

import { axiosBaseQuery } from "src/app/hooks"
import { Gas } from "src/model/gasPrice";

// Define a service using a base URL and expected endpoints
export const etherscanApi = createApi({
  reducerPath: "etherscanApi",
  baseQuery: axiosBaseQuery({ baseUrl: "https://api.etherscan.io/" }),
  endpoints: (builder) => ({
    getGasPrice: builder.query<Gas, string>({
      query: (apiKey) => ({url:`api?module=gastracker&action=gasoracle&apikey=${apiKey}`, method: 'get'}),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetGasPriceQuery } = etherscanApi;
