
import React from 'react';

export const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center py-12">
      <div className="animate-spin rounded-full h-10 w-10 border-2 border-[#26384D] border-t-[#34D399]"></div>
    </div>
  );
};

export const StatCard = ({ title, value, icon, color = 'teal' }) => {
  const colorClasses = {
    teal: 'border-[#34D399]/30 bg-[#34D399]/5',
    amber: 'border-amber-400/30 bg-amber-400/5',
    red: 'border-red-400/30 bg-red-400/5',
    blue: 'border-blue-400/30 bg-blue-400/5',
    indigo: 'border-indigo-400/30 bg-indigo-400/5',
  };

  const iconColors = {
    teal: 'text-[#34D399]',
    amber: 'text-amber-400',
    red: 'text-red-400',
    blue: 'text-blue-400',
    indigo: 'text-indigo-400',
  };

  return (
    <div className={`bg-[#142438] rounded-xl border ${colorClasses[color] || colorClasses.teal} p-6 transition-all duration-300 hover:border-[#34D399]/50 hover:-translate-y-1`}>
      <div className="flex justify-between items-start">
        <div>
          <p className="text-[#94A3B8] text-xs font-semibold uppercase tracking-wider">
            {title}
          </p>
          <p className="text-4xl font-bold mt-3 text-[#F8FAFC]">
            {value}
          </p>
        </div>

        <div className={`${iconColors[color] || iconColors.teal} text-2xl`}>
          {icon}
        </div>
      </div>
    </div>
  );
};

export const Badge = ({ children, color = 'slate' }) => {
  const colorClasses = {
    teal: 'bg-teal-400/10 text-teal-300 border border-teal-400/20',
    amber: 'bg-amber-400/10 text-amber-300 border border-amber-400/20',
    red: 'bg-red-400/10 text-red-300 border border-red-400/20',
    blue: 'bg-blue-400/10 text-blue-300 border border-blue-400/20',
    green: 'bg-emerald-400/10 text-emerald-300 border border-emerald-400/20',
    slate: 'bg-slate-400/10 text-slate-300 border border-slate-400/20',
  };

  return (
    <span className={`px-2.5 py-1 rounded-md text-xs font-medium whitespace-nowrap ${colorClasses[color] || colorClasses.slate}`}>
      {children}
    </span>
  );
};
