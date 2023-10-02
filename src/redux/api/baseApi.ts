import { axiosBaseQuery } from '@/helpers/axios/axiosBaseQuery';
import { getBaseUrl } from '@/helpers/config/envConfig';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
	reducerPath: 'api',
	baseQuery: axiosBaseQuery({ baseUrl: getBaseUrl() }),
	endpoints: (builder) => ({}),
	tagTypes: ['user']
});

