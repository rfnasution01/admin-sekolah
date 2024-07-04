import { createBrowserRouter, redirect } from 'react-router-dom'
import {
  ComingSoonPage,
  CommonLayout,
  LoginLayout,
  RootLayout,
  TambahProfilSekolahPage,
  TentangSekolahPage,
  VisiMisiPage,
  WebsiteLayout,
} from './loadables'
import Cookies from 'js-cookie'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <CommonLayout />,
    loader: async () => {
      const jwtPayload = Cookies.get('token')

      if (!jwtPayload) {
        return redirect('/login')
      }

      return null
    },
    children: [
      {
        path: '',
        element: <RootLayout />,
      },
      {
        path: 'website',
        element: <WebsiteLayout />,
        children: [
          {
            path: '',
            element: <ComingSoonPage />,
          },
          {
            path: 'pengumuman',
            element: <ComingSoonPage />,
          },
          {
            path: 'mading',
            element: <ComingSoonPage />,
          },
          {
            path: 'berita',
            element: <ComingSoonPage />,
          },
          {
            path: 'profil',
            element: <CommonLayout />,
            children: [
              {
                path: 'tentang',
                element: <CommonLayout />,
                children: [
                  {
                    path: '',
                    element: <TentangSekolahPage />,
                  },
                  {
                    path: ':aksi',
                    element: <TambahProfilSekolahPage />,
                  },
                ],
              },
              {
                path: 'visimisi',
                element: <VisiMisiPage />,
              },
            ],
          },
          {
            path: 'agenda',
            element: <ComingSoonPage />,
          },
          {
            path: 'prestasi',
            element: <ComingSoonPage />,
          },
          {
            path: 'galeri',
            element: <ComingSoonPage />,
          },
          {
            path: 'kontak',
            element: <ComingSoonPage />,
          },
        ],
      },
    ],
  },
  {
    path: '/login',
    element: <LoginLayout />,
    loader: async () => {
      const jwtPayload = Cookies.get('token')

      if (jwtPayload) {
        return redirect('/')
      }

      return null
    },
  },

  {
    path: '*',
    element: <ComingSoonPage />,
  },
])
