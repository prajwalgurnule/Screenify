import { clerkMiddleware } from '@clerk/nextjs/server';

export default clerkMiddleware();

export const config = {
  matcher: [
    // Match all routes except static files and Next.js internals
    '/((?!_next|.*\\.(?:ico|png|jpg|jpeg|svg|css|js|ts|json|map|txt|woff|woff2|ttf|eot|otf|webmanifest)).*)',
    // Always match API and TRPC routes
    '/(api|trpc)(.*)',
  ],
};
