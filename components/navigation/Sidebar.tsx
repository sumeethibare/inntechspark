'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Bars2Icon, XMarkIcon } from '@heroicons/react/24/solid';

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

  const toggleSidebar = () => {
    setIsOpen((prevState) => {
      const newState = !prevState;
      document.body.style.backgroundColor = newState
        ? 'rgba(0,0,0,0.4)'
        : 'white';
      return newState;
    });
  };


  const handleClickOutside = (e: MouseEvent) => {
    if (sidebarRef.current && !sidebarRef.current.contains(e.target as Node)) {
      toggleSidebar();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.addEventListener('click', handleClickOutside);
    } else {
      document.body.removeEventListener('click', handleClickOutside);
    }

    return () => {
      document.body.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      {/* Sidebar toggle button for mobile */}
      <div className="fixed top-5 right-5 md:hidden">
        <button
          onClick={toggleSidebar}
          className="p-3 text-2xl focus:outline-none"
          aria-label={isOpen ? 'Close Sidebar' : 'Open Sidebar'}
        >
          <Bars2Icon className="h-7 w-7" />
        </button>
      </div>

      {/* Mobile Sidebar */}
      <div
        ref={sidebarRef}
        className={`fixed inset-0 bg-gray-900 text-white transform transition-transform duration-500 ${isOpen ? 'translate-y-0' : '-translate-y-full'} md:hidden`}
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
                className="block py-3 px-8 text-lg hover:text-gray-400 cursor-pointer"
              >
                {item.name}
              </p>
            </Link>
          ))}
        </div>
      </div>

      {/* Navigation for larger screens */}
      <div className="hidden md:flex justify-start items-center space-x-8 p-4 bg-gray-800 text-white">
        {menuItems.map((item, index) => (
          <Link key={index} href={item.href}>
            <p className="hover:text-gray-400">{item.name}</p>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Sidebar;
