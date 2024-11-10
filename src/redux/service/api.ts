import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "/api/assessment",
  }),
  endpoints: () => ({}),
});

export default api;
