const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const { connectDB } = require('./configs/db.config');
const config = require('./configs');

const app = express();

/**
 * * Server middleware
 * TODO: extract middleware to separate location
 */
// init Cross Origin Resource Sharing
app.use(cors());

// init built in body parser (allows for request body json format)
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// init connection to MongoDB cluster
if (config.NODE_ENV !== 'test') connectDB();

// logging middleware
app.use((request, response, next) => {
  let requestLog = `\rTime: ${new Date().toUTCString()}\nType: ${
    request.method
  }\nURL path: ${request.path}\nOriginal req URL: ${request.originalUrl}\n`;
  requestLog += `URL Params: ${JSON.stringify(request.params)}\n`;
  requestLog += `URL Query: ${JSON.stringify(request.query)}\n`;
  requestLog += `Req Body: ${JSON.stringify(request.body)}\n`;
  console.log(requestLog);
  next();
});

// init routes
app.use(routes);

module.exports = app;
