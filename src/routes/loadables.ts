import loadable from '@loadable/component'

// ------------------
// ----- Layouts -----
// ------------------
export const CommonLayout = loadable(() => import('@/layout/CommonLayout'))
export const LoginLayout = loadable(() => import('@/layout/LoginLayout'))
export const RootLayout = loadable(() => import('@/layout/RootLayout'))
export const WebsiteLayout = loadable(() => import('@/layout/WebsiteLayout'))

// ------------------
// ----- Pages -----
// ------------------
export const ComingSoonPage = loadable(() => import('@/pages/ComingSoon'))
export const TentangSekolahPage = loadable(
  () => import('@/pages/Website/Profil/TentangSekolah'),
)

export const TambahProfilSekolahPage = loadable(
  () => import('@/features/website/tentang/TambahProfil'),
)

export const UpdateIdentitasSekolahPage = loadable(
  () => import('@/components/FormComponent/website/profil/FormUpdateIdentitas'),
)

export const VisiMisiPage = loadable(
  () => import('@/pages/Website/Profil/VisiMisi'),
)
