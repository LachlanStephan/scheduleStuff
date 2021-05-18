const withPWA = require("next-pwa");

settings = {
  pwa: {
    dest: "public",
    register: "true",
    skipWaiting: "true",
  },
};

module.exports =
  process.env.NODE_ENV === "development" ? settings : withPWA(settings);
