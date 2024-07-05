import {
  GetTentangSekolahResponse,
  PostIdentitasSekolahParams,
  PostTentangProfilParams,
  ProfilSekolahType,
} from '@/libs/type'
import { Res, api } from '../api'

export const WebsiteProfilEndpoints = api.injectEndpoints({
  endpoints: (builder) => ({
    getTentangSekolah: builder.query<Res<GetTentangSekolahResponse>, void>({
      query: () => ({
        url: `admin/website/profil/tentang`,
        method: 'GET',
      }),
      providesTags: ['website-profil-tentang'],
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
      invalidatesTags: ['website-profil-tentang', 'website-profil-visimisi'],
    }),
    updateProfilSekolah: builder.mutation<
      void,
      { body: PostIdentitasSekolahParams }
    >({
      query: ({ body }) => ({
        url: `admin/website/profil/tentang`,
        method: 'POST',
        body: body,
      }),
      invalidatesTags: ['website-profil-tentang'],
    }),
    deleteTentangSekolah: builder.mutation<void, { id: string }>({
      query: ({ id }) => ({
        url: `admin/website/profil/tentang/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['website-profil-tentang'],
    }),
    getVisiMisi: builder.query<Res<ProfilSekolahType[]>, void>({
      query: () => ({
        url: `admin/website/profil/visimisi`,
        method: 'GET',
      }),
      providesTags: ['website-profil-visimisi'],
    }),
  }),
})

export const {
  useGetTentangSekolahQuery,
  useGetVisiMisiQuery,
  useCreateTentangSekolahMutation,
  useDeleteTentangSekolahMutation,
  useUpdateProfilSekolahMutation,
} = WebsiteProfilEndpoints
