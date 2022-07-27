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
		query: () => createRequest("/exchanges"),
	}),
});

export const { useGetCryptosQuery } = cryptoApi;
