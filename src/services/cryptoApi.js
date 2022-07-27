import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query";

const options = {
    method: 'GET',
    url: 'https://coinranking1.p.rapidapi.com/coins',
    headers: {
      'X-RapidAPI-Key': 'd67c1bd16amsh9c9b01c97fdef5dp1f5509jsn76522c675d09',
      'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
    }
  };