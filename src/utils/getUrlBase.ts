const BASE_URL =
  process.env.NODE_ENV === "production"
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
    : "http://localhost:3000";

    console.log('vercel: ', process.env.NEXT_PUBLIC_VERCEL_URL);

const getUrl = (path: string) =>
  `${BASE_URL}${path}`;

export default getUrl;
