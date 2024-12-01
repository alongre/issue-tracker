'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaBug } from 'react-icons/fa';
import classNames from 'classnames';

const NavBar = () => {
	const currentPath = usePathname();

	const links = [
		{ href: '/', label: 'Dashboard' },
		{ href: '/issues', label: 'Issues' },
	];
	return (
		<nav className='flex space-x-6 border-b  mb-5 px-5 h-14 items-center'>
			<Link href={'/'}>
				<FaBug />
			</Link>
			<ul className='flex space-x-6'>
				{links.map(({ href, label }) => (
					<li
						key={`${href}${label}`}
						className={classNames({
							'text-zinc-900': href === currentPath,
							'text-zinc-500': href !== currentPath,
							'hover:text-zinc-800 transition-colors': true,
						})}
					>
						<Link href={href}>{label}</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default NavBar;
