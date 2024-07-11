const BASE_URL =
  process.env.NODE_ENV === 'production'
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
    : 'http://localhost:3000';

const BASE_EXTERNAL_URL = 'https://fernandafamiliar.soy';

const getUrl = (path: string) =>
  `${BASE_URL}${path}`;

const getExternaUrl = (path: string) =>
  `${BASE_EXTERNAL_URL}${path}`;

export {
  getUrl,
  getExternaUrl,
};
