import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  HomeIcon,
  DashboardIcon,
  ProfileIcon
} from './icons';

const Items = [
  { title: 'Home', path: '/', icon: <HomeIcon /> },
  { title: 'Dashboard', path: '/dashboard', icon: <DashboardIcon /> },
  { title: 'Profile', path: '/profile', icon: <ProfileIcon /> }
];

function Sidebar({ open, setOpen }) {
  const navigate = useNavigate();
  const location = useLocation();

  // Track active path (default is current URL)
  const [active, setActive] = useState(location.pathname);

  const handleClick = (path) => {
    setActive(path);
    navigate(path);
  };

  return (
    <div
      className={`${open ? "w-72 p-5" : "w-20 p-4"} 
        bg-[#4f3e2d] h-screen pt-8 relative 
        duration-300 ease-in-out`}
      onMouseLeave={() => setOpen(false)}
    >
      {/* Logo */}
      <div
        className={`flex items-center gap-x-4 transition-transform ease-in-out duration-300 
          ${open ? '-translate-y-1' : 'translate-y-0'}`}
        onMouseEnter={() => setOpen(true)}
      >
        <img
          src="logo1.png"
          alt="logo"
          className={`w-13 h-13 rounded-full object-cover object-center cursor-pointer 
            ease-in-out duration-500 ${open && "rotate-[360deg]"}`}
        />
      </div>

      {/* Menu Items */}
      <ul
        className={`pt-6 space-y-0.5 transition-transform ease-in-out duration-300 
          ${open ? '-translate-y-1' : 'translate-y-0'}`}
      >
        {Items.map((Item, index) => (
          <li
            key={index}
            onClick={() => handleClick(Item.path)}
            className={`flex flex-col rounded-md py-3 px-2 cursor-pointer 
              hover:text-white hover:bg-zinc-800/50 
              transition-all ease-in-out duration-300 
              ${Item.gap ? "mt-9" : "mt-2"} 
              ${active === Item.path ? "bg-zinc-800/70 text-white" : "text-zinc-50"}`}
          >
            <div className="flex items-center justify-between gap-x-4">
              <div className="flex items-center gap-2">
                <span className="text-lg">{Item.icon}</span>
                <span
                  className={`${!open && "hidden"} origin-left ease-in-out duration-300`}
                >
                  {Item.title}
                </span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;