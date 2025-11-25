import { baseApi } from "../../api/baseApi";

export const flightApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getFlights: builder.query({
      query: ({ origin, destination, departureDate }) =>
        `/flight-routes?origin=${origin}&destination=${destination}&departureDate=${departureDate}`,

      providesTags: ["Customer"],
    }),
  }),
});

export const { useGetFlightsQuery } = flightApi;