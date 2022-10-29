'use client'

import classNames from 'classnames'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { TRoutesKeys, TRouteValues } from 'constants/routes'

const NavLink = ({ text, href }: { text: TRouteValues; href: TRoutesKeys }) => {
    const pathname = usePathname()
    const isActive = href === pathname
    const linkClassNames = classNames(
        'text-white px-3 py-2 rounded-md text-sm font-medium',
        {
            'bg-gray-900': isActive,
            'bg-transparent': !isActive,
        }
    )

    return (
        <Link href={href} className={linkClassNames}>
            {text}
        </Link>
    )
}

export default NavLink
