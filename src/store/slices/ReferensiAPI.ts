import { GetAkreditasiResponseType } from '@/libs/type/ReferensiType'
import { Res, api } from '../api'

export const ReferensiEndpoints = api.injectEndpoints({
  endpoints: (builder) => ({
    getJenisProfil: builder.query<Res<string[]>, void>({
      query: () => ({
        url: `referensi/jenis_profil`,
        method: 'GET',
      }),
    }),
    getPenyelenggara: builder.query<Res<string[]>, void>({
      query: () => ({
        url: `referensi/penyelenggaraan`,
        method: 'GET',
      }),
    }),
    getAkreditasi: builder.query<Res<GetAkreditasiResponseType[]>, void>({
      query: () => ({
        url: `referensi/akreditasi`,
        method: 'GET',
      }),
    }),
  }),
})

export const {
  useGetAkreditasiQuery,
  useGetJenisProfilQuery,
  useGetPenyelenggaraQuery,
} = ReferensiEndpoints
