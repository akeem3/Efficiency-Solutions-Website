'use client';

import { useActionState } from 'react';
import { loginAdmin } from '../actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function AdminLoginPage() {
  const [state, formAction, isPending] = useActionState(loginAdmin, undefined);

  return (
    <div className="flex min-h-screen items-center justify-center bg-brand-background px-4">
      <div className="w-full max-w-md rounded-[10px] bg-white p-8 shadow-2xl ring-1 ring-black/5">
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-bold font-heading text-brand-primary">Admin Access</h1>
          <p className="mt-2 text-sm text-brand-muted">Enter your password to access the dashboard</p>
        </div>
        
        <form action={formAction} className="space-y-6">
          <div>
            <label htmlFor="password" className="sr-only">Password</label>
            <Input
              id="password"
              name="password"
              type="password"
              required
              placeholder="Admin Password"
              className="h-12 w-full rounded-[10px] border-brand-primary/10 px-4 text-sm focus-visible:ring-brand-primary"
            />
            {state?.error && (
              <p className="mt-2 text-sm text-red-500">{state.error}</p>
            )}
          </div>
          <Button 
            type="submit" 
            disabled={isPending}
            className="h-12 w-full rounded-[10px] bg-brand-primary font-bold text-white transition-all hover:bg-brand-primary/90 disabled:opacity-50"
          >
            {isPending ? 'Signing In...' : 'Sign In'}
          </Button>
        </form>
      </div>
    </div>
  );
}
