/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  webpack(config, { webpack }) {
    config.plugins.push(
      new webpack.DefinePlugin({
        "globalThis.__DEV__": false,
      })
    );
    return config;
  },
};

export default nextConfig;
