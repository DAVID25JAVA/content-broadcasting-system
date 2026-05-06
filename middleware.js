import { NextResponse } from 'next/server';

export function middleware(request) {
  const token = request.cookies.get('token')?.value;
  const { pathname } = request.nextUrl;

  const isTeacherRoute = pathname.startsWith('/teacher');
  const isPrincipalRoute = pathname.startsWith('/principal');

  if ((isTeacherRoute || isPrincipalRoute) && !token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/teacher/:path*', '/principal/:path*'],
};