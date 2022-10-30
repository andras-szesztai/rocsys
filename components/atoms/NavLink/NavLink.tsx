'use client'

import classNames from 'classnames'
import Link from 'next/link'
import { useSelectedLayoutSegments } from 'next/navigation'

import { Props } from './types'

const NavLink = ({ text, href }: Props) => {
    const selectedLayoutSegments = useSelectedLayoutSegments()
    const isActive = selectedLayoutSegments.length
        ? selectedLayoutSegments.find((layout) => `/${layout}` === href)
        : href === '/'
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
