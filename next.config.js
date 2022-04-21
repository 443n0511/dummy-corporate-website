const { NEXT_PUBLIC_API_KEY, NEXT_PUBLIC_SERVICE_DOMAIN } = process.env;

module.exports = {
  reactStrictMode: true,
  env: {
    API_KEY,
    SERVICE_DOMAIN,
  },
};
