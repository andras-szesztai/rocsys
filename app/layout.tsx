import Link from 'next/link'
import { ReactNode } from 'react'

const RootLayout = ({ children }: { children: ReactNode }) => (
    <html lang="en" className="h-full bg-gray-100">
        <head />
        <body className="h-full">
            <div className="min-h-full">
                <nav className="bg-gray-800">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="flex h-16 items-center justify-between">
                            <div className="flex items-center">
                                <div className="block">
                                    <div className="flex items-baseline space-x-4">
                                        <Link
                                            href="/"
                                            className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                                            aria-current="page"
                                        >
                                            Dashboard
                                        </Link>
                                        <Link
                                            href="/settings"
                                            className="bg-transparent text-white px-3 py-2 rounded-md text-sm font-medium"
                                        >
                                            Settings
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
                <header className="bg-white shadow">
                    <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
                        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                            Dashboard
                        </h1>
                    </div>
                </header>
                <main>
                    <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
                        {children}
                    </div>
                </main>
            </div>
        </body>
    </html>
)

export default RootLayout
