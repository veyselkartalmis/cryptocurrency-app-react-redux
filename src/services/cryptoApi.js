import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
	"X-RapidAPI-Key": "d67c1bd16amsh9c9b01c97fdef5dp1f5509jsn76522c675d09",
	"X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
};

const baseUrl = "https://coinranking1.p.rapidapi.com";

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
	reducerPath: "cryptoApi",
	baseQuery: fetchBaseQuery({ baseUrl }),
	endpoints: (builder) => ({
		getCryptos: builder.query({
			query: (count) => createRequest(`/coins?limit=${count}`),
		}),
		getCryptoDetais: builder.query({
			query: (coinId) => createRequest(`/coins/${coinId}`),
		})
	}),
});

export const { useGetCryptosQuery, useGetCryptoDetailsQuery } = cryptoApi;
