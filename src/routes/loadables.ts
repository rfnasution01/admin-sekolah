import loadable from '@loadable/component'

// ------------------
// ----- Layouts -----
// ------------------
export const LoginLayout = loadable(() => import('@/layout/LoginLayout'))
export const RootLayout = loadable(() => import('@/layout/RootLayout'))

// ------------------
// ----- Pages -----
// ------------------
export const ComingSoonPage = loadable(() => import('@/pages/ComingSoon'))
