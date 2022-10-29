import classNames from 'classnames'
import Link from 'next/link'

import { Props } from './types'

const Tile = ({ title, subtitle, href, isActive }: Props) => {
    const listItemClassNames = classNames(
        'py-2 px-4 list-none border-2 inline-flex gap-x-10 flex-1 rounded-md items-center',
        { 'bg-indigo-100 border-indigo-600': isActive },
        { 'bg-white': !isActive }
    )
    return (
        <li className={listItemClassNames}>
            <div className="flex flex-col">
                <h3 className="text-black text-xl whitespace-nowrap">
                    {title}
                </h3>
                <h4 className="text-neutral-600 text-sm whitespace-nowrap">
                    {subtitle}
                </h4>
            </div>
            <Link
                className="flex rounded border border-transparent bg-indigo-600 px-4 py-1 text-sm font-medium text-white hover:bg-indigo-700"
                href={href}
            >
                Details ›
            </Link>
        </li>
    )
}

export default Tile
