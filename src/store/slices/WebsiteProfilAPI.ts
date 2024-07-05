import {
  GetTentangSekolahResponse,
  GetVisiMisiResponse,
  PostTentangProfilParams,
} from '@/libs/type'
import { Res, api } from '../api'

export const WebsiteProfilEndpoints = api.injectEndpoints({
  endpoints: (builder) => ({
    getTentangSekolah: builder.query<Res<GetTentangSekolahResponse>, void>({
      query: () => ({
        url: `admin/website/profil/tentang`,
        method: 'GET',
      }),
      providesTags: ['profil-tentang'],
    }),
    createTentangSekolah: builder.mutation<
      void,
      { body: PostTentangProfilParams }
    >({
      query: ({ body }) => ({
        url: `admin/website/profil/tentang`,
        method: 'POST',
        body: body,
      }),
      invalidatesTags: ['profil-tentang'],
    }),
    deleteTentangSekolah: builder.mutation<void, { id: string }>({
      query: ({ id }) => ({
        url: `admin/website/profil/tentang/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['profil-tentang'],
    }),
    getVisiMisi: builder.query<Res<GetVisiMisiResponse>, void>({
      query: () => ({
        url: `admin/website/profil/visimisi`,
        method: 'GET',
      }),
    }),
  }),
})

export const {
  useGetTentangSekolahQuery,
  useGetVisiMisiQuery,
  useCreateTentangSekolahMutation,
  useDeleteTentangSekolahMutation,
} = WebsiteProfilEndpoints
