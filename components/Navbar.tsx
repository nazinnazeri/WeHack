"use client"
import Link from 'next/link';
import React from 'react';

const NAV_LINKS = [
  { href: '/feed', key: 'feed', label: 'Feed' },
  { href: '/timecapsule', key: 'timecapsule', label: 'Time Capsule' },
  { href: '/login', key: 'login ', label: 'Log In' },
];

const Navbar = () => {
  return (
    <nav className="text-darkblue relative p-10">
      <div className="mx-auto flexBetween padding-container">
        <Link className="text-3xl font-semibold" href="/">
            CHRNCL.
        </Link>

        <ul className="gap-4 lg:gap-12 flex">
          {NAV_LINKS.map((link) => (
            <Link href={link.href} key={link.key} className="regular-16 cursor-pointer flexCenter transition-all hover:font-bold">
              {link.label}
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;