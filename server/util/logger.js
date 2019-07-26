const { createLogger, format: { combine, timestamp, printf }, transports } = require('winston');
const config = require('./config');
const path = require('path');

/**
 * *logger
 * 
 * @description A winston.js logger instance with log levels and transports
 * @returns object
 */

const lineFormat = printf(({ timestamp, level, message }) => `${timestamp} [${level}] ${message}`);
const logger = createLogger({
  level: config.isDevelopment() ? 'debug' : 'info',
  format: combine(
    timestamp(),
    lineFormat,
  ),
  transports: [
    new transports.Console(),
    new transports.File({
      filename: path.resolve(__dirname, '../../temp/debug.log'),
    }),
  ],
});

module.exports = logger;