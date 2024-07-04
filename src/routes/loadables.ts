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
