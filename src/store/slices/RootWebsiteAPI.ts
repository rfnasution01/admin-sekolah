import {
  GetIdentitasWebsiteResponse,
  GetMenuWebsite,
} from '@/libs/type/RootWebsite'
import { Res, api } from '../api'

export const RootWebsiteEndpoints = api.injectEndpoints({
  endpoints: (builder) => ({
    getWebsiteIdentitas: builder.query<Res<GetIdentitasWebsiteResponse>, void>({
      query: () => ({
        url: `admin/website/identitas`,
        method: 'GET',
      }),
    }),
    getMenuWebsite: builder.query<Res<GetMenuWebsite[]>, void>({
      query: () => ({
        url: `admin/website/menu`,
        method: 'GET',
      }),
    }),
  }),
})

export const { useGetMenuWebsiteQuery, useGetWebsiteIdentitasQuery } =
  RootWebsiteEndpoints
