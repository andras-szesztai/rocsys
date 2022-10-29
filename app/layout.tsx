import { ReactNode } from 'react'

const RootLayout = ({ children }: { children: ReactNode }) => (
    <html lang="en">
        <head />
        <body>{children}</body>
    </html>
)

export default RootLayout
