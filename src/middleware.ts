import { MiddlewareConfig, NextRequest, NextResponse } from "next/server";

export default function middleware(req: NextRequest) {
  const token = req.cookies.get("token");
  const { pathname } = req.nextUrl;

  if (pathname === "/admin/login") {
    if (!token) return NextResponse.next();

    return NextResponse.redirect(new URL("/admin/dashboard", req.url));
  }

  if (pathname === "/admin/dashboard") {
    if (!token) return NextResponse.redirect(new URL("/admin/login", req.url));

    return NextResponse.next();
  }
}

export const config: MiddlewareConfig = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
