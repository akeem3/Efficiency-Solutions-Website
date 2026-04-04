'use client';

import { useActionState } from 'react';
import { loginAdmin } from '../admin/actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function AdminLoginPage() {
  const [state, formAction, isPending] = useActionState(loginAdmin, undefined);

  return (
    <div className="flex fixed inset-0 z-[100] h-full w-full items-center justify-center bg-brand-background px-4 py-8 overflow-y-auto">
      <div className="w-full max-w-md rounded-[10px] bg-white p-6 md:p-8 shadow-2xl ring-1 ring-black/5 my-auto">
        <div className="mb-6 md:mb-8 text-center text-balance">
          <h1 className="text-xl md:text-2xl font-bold font-heading text-brand-primary">Admin Access</h1>
          <p className="mt-2 text-xs md:text-sm text-brand-muted px-4">Enter your credentials to access the Efficiency Solutions dashboard</p>
        </div>
        
        <form action={formAction} className="space-y-4">
          <div className="space-y-1.5">
            <label htmlFor="email" className="text-xs font-semibold text-brand-primary ml-1">Email Address</label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              placeholder="admin@efficiency.com"
              className="h-11 md:h-12 w-full rounded-[10px] border-brand-primary/10 px-4 text-sm focus-visible:ring-brand-primary"
            />
          </div>
          <div className="space-y-1.5">
            <label htmlFor="password" className="text-xs font-semibold text-brand-primary ml-1">Password</label>
            <Input
              id="password"
              name="password"
              type="password"
              required
              placeholder="••••••••"
              className="h-11 md:h-12 w-full rounded-[10px] border-brand-primary/10 px-4 text-sm focus-visible:ring-brand-primary"
            />
            {state?.error && (
              <p className="mt-2 text-[13px] text-red-500 font-medium bg-red-50 p-2 rounded-lg border border-red-100">{state.error}</p>
            )}
          </div>
          <div className="pt-2">
            <Button 
              type="submit" 
              disabled={isPending}
              className="h-11 md:h-12 w-full rounded-[10px] bg-brand-primary font-bold text-white transition-all hover:bg-brand-primary/90 disabled:opacity-50 shadow-md"
            >
              {isPending ? 'Authenticating...' : 'Sign In to Dashboard'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
