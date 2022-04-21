const { NEXT_PUBLIC_API_KEY, NEXT_PUBLIC_SERVICE_DOMAIN } = process.env;

module.exports = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_API_KEY,
    NEXT_PUBLIC_SERVICE_DOMAIN,
  },
};
