const dev = process.env.NODE_ENV !== "production";
module.exports = {
  experimental: { esmExternals: true },
  env: {
    API_URL: dev ? "http://localhost:3000/" : "/",
  },
};
