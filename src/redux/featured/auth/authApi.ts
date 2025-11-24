import { baseApi } from '@/redux/api/baseApi';

export const authApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    loginUser: builder.mutation({
      query: data => ({
        url: '/auth/login',
        method: 'POST',
        body: data,
      }),
    }),
    registerUser: builder.mutation({
      query: data => ({
        url: '/auth/initiate-registration',
        method: 'POST',
        body: data,
      }),
    }),

    completeRegistration: builder.mutation({
      query: data => ({
        url: '/auth/complete-registration',
        method: 'POST',
        body: data,
      }),
    }),

    verifyRegistrationEmail: builder.mutation({
      query: data => ({
        url: '/auth/verify-registration-email',
        method: 'POST',
        body: data,
      }),
    }),

    forgotPassword: builder.mutation({
      query: data => ({
        url: '/auth/forgot-password',
        method: 'POST',
        body: data,
      }),
    }),

    resetPassword: builder.mutation({
      query: data => ({
        url: '/auth/reset-password',
        method: 'POST',
        body: data,
      }),
    }),

    logout: builder.mutation<void, string>({
      query: userId => ({
        url: `/auth/logout/${userId}`,
        method: 'POST',
        credentials: 'include',
      }),
    }),
    getMe: builder.query({
      query: () => ({
        url: '/auth/me',
        method: 'GET',
      }),
    }),

    profileUpdate: builder.mutation({
      query: (data) => ({
        url: "/user/update-my-profile",
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Customer"],
    }),
    
    profilePhotoUpdate: builder.mutation({
      query: (data) => ({
        url: "/user/update-my-profile",
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Customer"],
    })

  }),
});

export const {
  useLoginUserMutation,
  useRegisterUserMutation,
  useCompleteRegistrationMutation,
  useVerifyRegistrationEmailMutation,
  useForgotPasswordMutation,
  useResetPasswordMutation,
  useLogoutMutation,
  useGetMeQuery,
  useProfileUpdateMutation,
  useProfilePhotoUpdateMutation
} = authApi;

// code Writen By Rony 

