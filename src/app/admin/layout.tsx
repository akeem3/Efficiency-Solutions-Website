import Link from 'next/link';
import { logoutAdmin } from './actions';
import { LuLayoutDashboard, LuTags, LuCar, LuLogOut } from 'react-icons/lu';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-brand-background">
      {/* Sidebar */}
      <div className="w-64 bg-[#1e293b] text-white flex flex-col">
        <div className="p-6">
          <Link href="/admin">
            <h2 className="text-xl font-bold font-heading">ES Admin</h2>
          </Link>
        </div>
        
        <nav className="flex-1 space-y-2 px-4 mt-6">
          <Link href="/admin" className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium hover:bg-white/10 transition-all">
            <LuLayoutDashboard className="h-5 w-5" />
            Overview
          </Link>
          <Link href="/admin/branding" className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium hover:bg-white/10 transition-all">
            <LuTags className="h-5 w-5" />
            Branding Products
          </Link>
          <Link href="/admin/logistics" className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium hover:bg-white/10 transition-all">
            <LuCar className="h-5 w-5" />
            Logistics Fleet
          </Link>
        </nav>

        <div className="p-4 border-t border-white/10">
          <form action={logoutAdmin}>
            <button type="submit" className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-red-400 hover:bg-white/10 transition-all">
              <LuLogOut className="h-5 w-5" />
              Sign Out
            </button>
          </form>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {children}
      </div>
    </div>
  );
}
