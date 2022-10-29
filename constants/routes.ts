export const ROUTES = {
    '/': 'Home',
    '/dashboard': 'Dashboard',
    '/settings': 'Settings',
} as const

export type TRoutesKeys = keyof typeof ROUTES

export type TRouteValues = typeof ROUTES[TRoutesKeys]
