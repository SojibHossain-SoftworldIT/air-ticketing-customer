import { baseApi } from "../../api/baseApi";

export const flightApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getFlightRoutes: builder.query({
      query: () => `/flight-routes`,
      providesTags: ["Customer"],
    }),

    getFlights: builder.query({
      query: ({ originLocationCode, destinationLocationCode, departureDate }) =>
        `/flight-offers?originLocationCode=${originLocationCode}&destinationLocationCode=${destinationLocationCode}&departureDate=${departureDate}`,
      providesTags: ["Customer"],
    }),
  }),
});

export const { useGetFlightsQuery , useGetFlightRoutesQuery  } = flightApi;