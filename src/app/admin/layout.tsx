import Link from 'next/link';
import { LuMenu } from 'react-icons/lu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import AdminSidebarNav from './components/AdminSidebarNav';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col lg:flex-row bg-brand-background">
      {/* Desktop Sidebar (Hidden on mobile) */}
      <aside className="hidden lg:flex w-64 flex-col sticky top-0 h-screen border-r border-black/5 bg-[#1e293b]">
        <AdminSidebarNav />
      </aside>

      {/* Mobile Header (Only on mobile/tablet) */}
      <header className="lg:hidden sticky top-0 z-40 flex h-16 items-center justify-between border-b border-black/5 bg-[#1e293b] px-4 text-white">
        <Link href="/admin">
          <h2 className="text-xl font-bold font-heading">ES Admin</h2>
        </Link>
        <Sheet>
          <SheetTrigger 
            render={
              <button className="flex h-10 w-10 items-center justify-center rounded-lg hover:bg-white/10 transition-all">
                <LuMenu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </button>
            }
          />
          <SheetContent side="left" className="p-0 w-72 border-none">
            <AdminSidebarNav />
          </SheetContent>
        </Sheet>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 overflow-x-hidden">
        <div className="h-full min-h-[calc(100vh-64px)] lg:min-h-screen p-4 md:p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
