const dotenv = require('dotenv');
const path = require('path');

/**
 * *config
 * 
 * @description Load the env variables and provides some config related helper functions
 * @returns object
 */
const result = dotenv.config({
  path: path.resolve(__dirname, '../../.env'),
});

if (result.error) {
  throw result.error;
}

const config = {
  env: Object.assign({}, result.parsed),
  isDevelopment: () => result.parsed.NODE_ENV === 'development',
  isProduction: () => result.parsed.NODE_ENV === 'production',
};

module.exports = config;
