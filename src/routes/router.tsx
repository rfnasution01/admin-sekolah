import { createBrowserRouter, redirect } from 'react-router-dom'
import {
  ComingSoonPage,
  CommonLayout,
  LoginLayout,
  RootLayout,
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
            element: <ComingSoonPage isLayout />,
          },
          {
            path: 'pengumuman',
            element: <ComingSoonPage isLayout />,
          },
          {
            path: 'mading',
            element: <ComingSoonPage isLayout />,
          },
          {
            path: 'berita',
            element: <ComingSoonPage isLayout />,
          },
          {
            path: 'agenda',
            element: <ComingSoonPage isLayout />,
          },
          {
            path: 'prestasi',
            element: <ComingSoonPage isLayout />,
          },
          {
            path: 'galeri',
            element: <ComingSoonPage isLayout />,
          },
          {
            path: 'kontak',
            element: <ComingSoonPage isLayout />,
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
