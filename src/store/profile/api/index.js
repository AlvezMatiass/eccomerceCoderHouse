import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { URL_BASE_FIREBASE_REALTIME_DATABASE } from "../../../constants/firebase";

export const profileApi = createApi({
    reducerPath: 'profileApi',
    baseQuery: fetchBaseQuery({ baseUrl: URL_BASE_FIREBASE_REALTIME_DATABASE }),
    tagTypes: ['profile'],
    endpoints: (builder) => ({
       getProfile : builder.query({
        query: ({ localId }) => ({
            url: `/users/${localId}.json`,
            method: 'GET',
        })
       }),
       updateImageProfile: builder.mutation({
        query: ({ localId, image }) => ({
            url: `/users/${localId}.json`,
            method: 'PATCH',
            body: { profileImage: image },
        }),
      }),
    })
})

export const { useGetProfileQuery, useUpdateImageProfileMutation } = profileApi