// components/Header.js
import React from 'react';
import Link from 'next/link';
import routes from '../app/routes';

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-white shadow">
      <Link href={routes.home}>
        <h1 className="text-xl font-bold text-blue-600">UroodX</h1>
      </Link>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link href={routes.auth}>Auth</Link>
          </li>
          <li>
            <Link href={routes.dashboard}>Dashboard</Link>
          </li>
          <li>
            <Link href={routes.quote}>Get Quote</Link>
          </li>
          <li>
            <Link href={routes.shipment}>Shipment</Link>
          </li>
          <li>
            <Link href={routes.tracking}>Tracking</Link>
          </li>
          <li>
            <Link href={routes.payment}>Payment</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
