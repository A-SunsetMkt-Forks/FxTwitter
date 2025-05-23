import { Context } from 'hono';

export const linkHitRequest = async (c: Context) => {
  const userAgent = c.req.header('User-Agent') || '';

  if (userAgent.includes('Telegram')) {
    return c.text('', 403);
  }
  // If param `url` exists, 302 redirect to it
  if (typeof c.req.query('url') === 'string') {
    const url = new URL(c.req.query('url') as string);
    return c.redirect(url.href, 302);
  }
};

export const linkGoRequest = async (c: Context) => {
  // If param `url` exists, 302 redirect to it
  if (typeof c.req.query('url') === 'string') {
    const url = new URL(c.req.query('url') as string);
    return c.redirect(url.href, 302);
  }
};
