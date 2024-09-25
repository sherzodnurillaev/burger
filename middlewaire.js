import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { NextResponse } from "next/server";
import { i18n } from "./i18n.config";

let locales = ['en-US', 'ru-RU'];

function getLocale(request) {
    const negotiatorHeaders = {};
    for (const [key, value] of request.headers.entries()) {
        negotiatorHeaders[key] = value;
    }

    const languages = new Negotiator({ headers: negotiatorHeaders }).languages();
    const locale = matchLocale(languages, locales, i18n.defaultLocale);
    return locale;
}

export function middleware(request) {
    const { pathname } = request.nextUrl;
    const pathnameHasLocale = locales.some(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    );

    if (pathnameHasLocale) return;

    const locale = getLocale(request);
    if (!locale) {
        console.error("No supported locale found. Redirecting to default locale.");
        request.nextUrl.pathname = `/${i18n.defaultLocale}${pathname}`;
        return NextResponse.redirect(request.nextUrl);
    }

    request.nextUrl.pathname = `/${locale}${pathname}`;
    return NextResponse.redirect(request.nextUrl);
}

export const config = {
    matcher: [
        '/((?!_next).*)',
    ],
};
