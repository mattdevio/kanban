const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const config = require('../util/config');
const http = require('http');

/**
 * *kanban
 * 
 * @description Initializes the kanban express app instance
 * @returns object
 */
const kanban = () => {

  const app = express();
  const expressServer = http.Server(app);

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(helmet());

  if (config.isDevelopment()) {
    app.set('json spaces', 2);
  }

  return expressServer;

};

module.exports = kanban;
