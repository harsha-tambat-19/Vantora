
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const isActive = (path) => location.pathname === path;

  const navItems = [
    { path: '/dashboard', label: 'Dashboard', icon: '∎' },
    { path: '/inventory', label: 'Inventory', icon: '▦' },
    { path: '/orders', label: 'Orders', icon: '⊞' },
    { path: '/finance', label: 'Finance', icon: '◆' },
    { path: '/employees', label: 'Employees', icon: '●' },
    { path: '/ai', label: 'AI Assistant', icon: '⬢' },
  ];

  return (
    <div className="hidden md:flex h-screen w-64 bg-[#0B1728] text-white flex-col border-r border-[#26384D]">

      {/* Brand */}
      <div className="p-6 border-b border-[#26384D]">
        <div className="space-y-1">
          <h1 className="text-2xl font-bold tracking-wide text-white">
            Vantora<span className="text-[#34D399]"></span>
          </h1>

          <div className="w-10 h-1 rounded-full bg-[#34D399]"></div>
        </div>

        <p className="text-xs text-[#94A3B8] mt-3">
           AI-Powered Business Suite
        </p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-6 space-y-2">
        {navItems.map((item) => (
          <button
            key={item.path}
            onClick={() => navigate(item.path)}
            className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 flex items-center gap-3 ${
              isActive(item.path)
                ? 'bg-[#34D399]/10 text-[#34D399] border-l-2 border-[#34D399] pl-3.5'
                : 'text-[#94A3B8] hover:text-white hover:bg-[#142438]'
            }`}
          >
            <span className="text-base">{item.icon}</span>
            <span className="text-sm font-medium">{item.label}</span>
          </button>
        ))}
      </nav>

      {/* User Section */}
      <div className="border-t border-[#26384D] p-4 space-y-3">
        <div className="px-2 text-xs">
          <p className="text-[#64748B] mb-1">Account</p>

          <p className="font-medium text-white truncate">
            {user?.name || 'User'}
          </p>

          <p className="text-[#94A3B8] mt-1 truncate">
            {user?.email}
          </p>
        </div>

        <button
          onClick={handleLogout}
          className="w-full bg-[#142438] hover:bg-red-500/10 hover:text-red-400 text-[#CBD5E1] px-3 py-2.5 rounded-lg transition-colors text-xs font-medium border border-[#26384D]"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};
