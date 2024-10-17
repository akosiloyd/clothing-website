"use client"

import Link from 'next/link';
import { ShoppingBag, User } from 'lucide-react';
import { ModeToggle } from './ui/mode-toggle';

export function Navbar() {
  return (
    <nav className="bg-background border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold">Chic Threads</span>
            </Link>
          </div>
          <div className="flex items-center">
            <Link href="/shop" className="text-sm font-medium text-gray-700 hover:text-gray-800 dark:text-gray-200 dark:hover:text-white px-3 py-2">
              Shop
            </Link>
            <Link href="/about" className="text-sm font-medium text-gray-700 hover:text-gray-800 dark:text-gray-200 dark:hover:text-white px-3 py-2">
              About
            </Link>
            <Link href="/contact" className="text-sm font-medium text-gray-700 hover:text-gray-800 dark:text-gray-200 dark:hover:text-white px-3 py-2">
              Contact
            </Link>
            <Link href="/cart" className="ml-4 flow-root lg:ml-6">
              <ShoppingBag className="h-6 w-6" />
            </Link>
            <Link href="/account" className="ml-4 flow-root lg:ml-6">
              <User className="h-6 w-6" />
            </Link>
            <div className="ml-4">
              <ModeToggle />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}