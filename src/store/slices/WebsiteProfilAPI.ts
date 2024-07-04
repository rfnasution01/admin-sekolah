import { GetTentangSekolahResponse, GetVisiMisiResponse } from '@/libs/type'
import { Res, api } from '../api'

export const WebsiteProfilEndpoints = api.injectEndpoints({
  endpoints: (builder) => ({
    getTentangSekolah: builder.query<Res<GetTentangSekolahResponse>, void>({
      query: () => ({
        url: `admin/website/profil/tentang`,
        method: 'GET',
      }),
    }),
    getVisiMisi: builder.query<Res<GetVisiMisiResponse>, void>({
      query: () => ({
        url: `admin/website/profil/visimisi`,
        method: 'GET',
      }),
    }),
  }),
})

export const { useGetTentangSekolahQuery, useGetVisiMisiQuery } =
  WebsiteProfilEndpoints
