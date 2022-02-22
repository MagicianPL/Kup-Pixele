// Sync object
/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
  verbose: true,
  testEnvironment: "jest-environment-jsdom-fifteen",
};

module.exports = config;

// Or async function
module.exports = async () => {
  return {
    verbose: true,
  };
};
