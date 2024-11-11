'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { Bars2Icon, XMarkIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';

type MenuItem = {
  name: string;
  href: string;
};

interface SidebarProps {
  menuItems: MenuItem[];
}

const Sidebar: React.FC<SidebarProps> = ({ menuItems }) => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setIsOpen((prevState) => {
      const newState = !prevState;
      // Change body background color when sidebar is open
      document.body.style.backgroundColor = newState
        ? 'rgba(0,0,0,0.4)'
        : 'white';
      return newState;
    });
  };

  // Memoize the handleClickOutside function to prevent unnecessary re-renders
  const handleClickOutside = useCallback((e: MouseEvent) => {
    if (sidebarRef.current && !sidebarRef.current.contains(e.target as Node)) {
      toggleSidebar();
    }
  }, []);

  // Add/remove event listener based on the sidebar open state
  useEffect(() => {
    if (isOpen) {
      document.body.addEventListener('click', handleClickOutside);
    } else {
      document.body.removeEventListener('click', handleClickOutside);
    }

    // Clean up the event listener when component unmounts or `isOpen` changes
    return () => {
      document.body.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen, handleClickOutside]);

  return (
    <>
      {/* Sidebar toggle button for mobile */}
      <div className="fixed top-1 right-5 md:hidden">
        <button
          onClick={toggleSidebar}
          className="p-3 text-2xl focus:outline-none"
          aria-label={isOpen ? 'Close Sidebar' : 'Open Sidebar'}
        >
          <Bars2Icon className="h-7 w-7 text-white" />
        </button>
      </div>

      {/* Mobile Sidebar */}
      <div
        ref={sidebarRef}
        className={`fixed inset-0 bg-zinc-950 text-white transform transition-transform duration-500 ${isOpen ? 'translate-y-0' : '-translate-y-full'} md:hidden`}
      >
        <div className="fixed top-5 right-5">
          <button
            onClick={toggleSidebar}
            className="p-3 text-2xl focus:outline-none"
            aria-label="Close Sidebar"
          >
            <XMarkIcon className="h-7 w-7" />
          </button>
        </div>

        {/* Sidebar Menu Items for mobile */}
        <div className="mt-20">
          {menuItems.map((item, index) => (
            <Link key={index} href={item.href}>
              <p
                onClick={toggleSidebar}
                className="block py-3 px-8 text-2xl hover:text-gray-400 cursor-pointer"
              >
                {item.name}
              </p>
            </Link>
          ))}
        </div>
      </div>

      {/* Navigation for larger screens */}
      <div className="flex justify-between bg-zinc-950 text-white">
        {/* Logo and Name */}
        <div className="flex justify-end items-center p-4">
          <Image src="/logo.png" alt="Logo" width={30} height={30} />
          <Link href='/'>
            <p className="fontmono px-4">inntechspark</p>
          </Link>
        </div>

        {/* Sidebar Menu Items for desktop */}
        <div className="hidden md:flex justify-start items-center space-x-8 p-4">
          {menuItems.map((item, index) => (
            <Link key={index} href={item.href}>
              <p className="hover:text-gray-400">{item.name}</p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
