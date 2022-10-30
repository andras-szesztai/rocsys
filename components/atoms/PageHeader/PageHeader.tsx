'use client'

import { ROUTES, TRoutesKeys } from 'constants/routes'
import { usePathname } from 'next/navigation'

const PageHeader = () => {
    const pathname = usePathname()
    return (
        <header className="bg-white shadow">
            <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                    {ROUTES[pathname as TRoutesKeys]}
                </h1>
            </div>
        </header>
    )
}

export default PageHeader
