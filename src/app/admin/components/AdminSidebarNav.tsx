'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LuLayoutDashboard, LuTags, LuCar, LuLogOut } from 'react-icons/lu';
import { cn } from '@/lib/utils';
import { logoutAdmin } from '../actions';

interface AdminSidebarNavProps {
  onItemClick?: () => void;
}

const NAV_ITEMS = [
  {
    href: '/admin',
    label: 'Overview',
    icon: LuLayoutDashboard,
  },
  {
    href: '/admin/branding',
    label: 'Branding Products',
    icon: LuTags,
  },
  {
    href: '/admin/logistics',
    label: 'Logistics Fleet',
    icon: LuCar,
  },
];

export default function AdminSidebarNav({ onItemClick }: AdminSidebarNavProps) {
  const pathname = usePathname();

  return (
    <div className="flex flex-col h-full bg-[#1e293b] text-white">
      <div className="p-6">
        <Link href="/admin" onClick={onItemClick}>
          <h2 className="text-xl font-bold font-heading">ES Admin</h2>
        </Link>
      </div>

      <nav className="flex-1 space-y-1 px-4 mt-4">
        {NAV_ITEMS.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onItemClick}
              className={cn(
                "flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-all duration-200",
                isActive 
                  ? "bg-brand-primary text-white shadow-lg" 
                  : "text-slate-400 hover:bg-white/10 hover:text-white"
              )}
            >
              <item.icon className={cn("h-5 w-5", isActive ? "text-white" : "text-slate-400")} />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-white/10 mt-auto">
        <form action={logoutAdmin}>
          <button 
            type="submit" 
            className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-red-400 hover:bg-white/10 transition-all duration-200"
          >
            <LuLogOut className="h-5 w-5" />
            Sign Out
          </button>
        </form>
      </div>
    </div>
  );
}
