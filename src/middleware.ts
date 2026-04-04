import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isAdminRoute = pathname.startsWith('/admin');
  const isLoginPage = pathname === '/login';
  
  const authCookie = request.cookies.get('es_admin_auth');
  const isAuthenticated = authCookie?.value === process.env.ADMIN_PASSWORD;

  // Protect admin routes
  if (isAdminRoute && !isAuthenticated) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // Redirect authenticated users away from login page
  if (isLoginPage && isAuthenticated) {
    return NextResponse.redirect(new URL('/admin', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin(.*)', '/login'],
};
