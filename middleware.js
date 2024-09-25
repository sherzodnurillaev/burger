import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';
import { NextResponse } from 'next/server';
 
let headers = { 'accept-language': 'en,en;q=0.5' }
let languages = new Negotiator({ headers }).languages()
let locales = ['en', 'ru']
let defaultLocale = 'en'
 
match(languages, locales, defaultLocale) 
 
function getLocale(request) {
    const negotiatorHeaders = {};
    
    for (const [key, value] of request.headers.entries()) {
        negotiatorHeaders[key] = value;
    }

    const languages = new Negotiator({ headers: negotiatorHeaders }).languages();

    const locale = match(languages, locales, defaultLocale);
    return locale;
}
 
export function middleware(request) {

  const { pathname } = request.nextUrl
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`

)
 
  if (pathnameHasLocale) return
 
  const locale = getLocale(request)
  request.nextUrl.pathname = `/${locale}${pathname}`
  return NextResponse.redirect(request.nextUrl)
}
 
export const config = {
  matcher: [
    // Skip all internal paths (_next)
    // '/((?!_next).*)'
    // Optional: only run on root (/) URL
    // '/'
  ],
}
