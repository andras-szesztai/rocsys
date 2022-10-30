'use client'

import { ReactNode } from 'react'
import { ApolloProvider } from '@apollo/client'

import client from 'providers/apolloClient'
import PageHeader from 'components/atoms/PageHeader/PageHeader'
import { NavLink } from 'components/atoms/NavLink'
import 'styles/globals.css'

const RootLayout = ({ children }: { children: ReactNode }) => (
    <html lang="en" className="h-full bg-gray-100">
        <head>
            <title>Rocsys</title>
        </head>
        <body className="h-full">
            <div className="min-h-full flex flex-col">
                <nav className="bg-gray-800">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="flex h-16 items-center justify-between">
                            <div className="flex items-center">
                                <div className="block">
                                    <div className="flex items-baseline space-x-4">
                                        <NavLink href="/" text="Home" />
                                        <NavLink
                                            href="/dashboard"
                                            text="Dashboard"
                                        />
                                        <NavLink
                                            href="/settings"
                                            text="Settings"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
                <PageHeader />
                <main className="flex-1 relative">
                    <div className="mx-auto max-w-7xl py-6 px-8 h-96">
                        <ApolloProvider client={client}>
                            {children}
                        </ApolloProvider>
                    </div>
                </main>
            </div>
        </body>
    </html>
)

export default RootLayout
