import { defineMiddleware } from 'astro:middleware';

const ALLOWED_ROUTES = ['/', '/assignment'];

export const onRequest = defineMiddleware(async (context, next) => {
  const { pathname } = context.url;

  const isAllowed = ALLOWED_ROUTES.some(route => 
    pathname === route || pathname.startsWith(route + '/')
  );

  if (!isAllowed && pathname !== '/maintenance' && !pathname.startsWith('/_')) {
    return context.redirect('/maintenance');
  }

  return next();
});
