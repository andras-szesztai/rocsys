import classNames from 'classnames'
import Link from 'next/link'

import { Props } from './types'

const Tile = ({ title, subtitle, href, isActive = false }: Props) => {
    const listItemClassNames = classNames(
        'w-80 py-2 px-4 list-none border-2 inline-flex flex-1 rounded-md items-center justify-between',
        { 'bg-indigo-100 border-indigo-600': isActive },
        { 'bg-white': !isActive }
    )
    return (
        <li className={listItemClassNames}>
            <div className="flex flex-col truncate">
                <h3 className="text-black text-xl whitespace-nowrap truncate overflow-hidden">
                    {title}
                </h3>
                {subtitle && (
                    <h4 className="text-neutral-600 text-sm whitespace-nowrap truncate overflow-hidden">
                        {subtitle}
                    </h4>
                )}
            </div>
            {href && (
                <Link
                    className="flex rounded border border-transparent bg-indigo-600 px-4 py-1 text-sm font-medium text-white hover:bg-indigo-700"
                    href={href}
                >
                    Details ›
                </Link>
            )}
        </li>
    )
}

export default Tile
