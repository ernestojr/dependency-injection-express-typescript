const winston = require('winston');

export default new winston.Logger({
  level: 'silly',
  exitOnError: false,
  transports: [
    new(winston.transports.Console)({
      prettyPrint: true,
      colorize: true,
      json: false,
    }),
  ],
});
