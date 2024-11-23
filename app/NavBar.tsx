import Link from 'next/link';
import React from 'react';
import { FaBug } from 'react-icons/fa';

const NavBar = () => {
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
					<li key={`${href}${label}`} className='text-zinc-500 hover:text-zinc-800 transition-colors'>
						<Link href={href}>{label}</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default NavBar;
