import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { Gas } from "src/model/gasPrice";

// Define a service using a base URL and expected endpoints
export const etherscanApi = createApi({
  reducerPath: "etherscanApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.etherscan.io" }),
  endpoints: (builder) => ({
    getGasPrice: builder.query<Gas, string>({
      query: (apiKey) =>
        `api?module=gastracker&action=gasoracle&apikey=${apiKey}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetGasPriceQuery } = etherscanApi;
