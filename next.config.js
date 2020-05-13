require("dotenv").config();

module.exports = () => {
  return {
    env: {
      GH_AUTH: process.env.GH_AUTH,
      GH_NAME: process.env.GH_NAME,
      GA_TRACKING_ID: process.env.GA_TRACKING_ID,
    },
  };
};
