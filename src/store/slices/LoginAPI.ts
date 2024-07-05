import {
  GetLoginResponseType,
  LoginParamsType,
  LoginResponseType,
} from '@/libs/type'
import { Res, api } from '../api'

export const LoginEndpoints = api.injectEndpoints({
  endpoints: (builder) => ({
    getLogin: builder.query<Res<GetLoginResponseType>, void>({
      query: () => ({
        url: `auth/login`,
        method: 'GET',
      }),
    }),
    createLogin: builder.mutation<
      Res<LoginResponseType>,
      { data: LoginParamsType }
    >({
      query: ({ data }) => ({
        url: `auth/login`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['website-profil-tentang', 'website-profil-visimisi'],
    }),
  }),
})

export const { useGetLoginQuery, useCreateLoginMutation } = LoginEndpoints
