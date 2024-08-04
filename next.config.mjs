import path from "path";

export default {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.resolve.alias["@"] = path.resolve(".");
    return config;
  },
};
