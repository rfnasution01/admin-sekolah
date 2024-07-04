import {
  GetAplikasiResponseType,
  GetIdentiasAdminResponseType,
} from '@/libs/type/RootType'
import { Res, api } from '../api'

export const RootEndpoints = api.injectEndpoints({
  endpoints: (builder) => ({
    getAdminIdentitas: builder.query<Res<GetIdentiasAdminResponseType>, void>({
      query: () => ({
        url: `admin/identitas`,
        method: 'GET',
      }),
    }),
    getAplikasi: builder.query<Res<GetAplikasiResponseType[]>, void>({
      query: () => ({
        url: `admin/aplikasi`,
        method: 'GET',
      }),
    }),
  }),
})

export const { useGetAdminIdentitasQuery, useGetAplikasiQuery } = RootEndpoints
