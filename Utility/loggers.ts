const winston = require('winston');
const options = {
    level:"info",
    transports: [
      new winston.transports.Console({level: 'info', colorsize: false}),
      new winston.transports.File({ filename: 'error.log', level: 'info', maxsize:5242880,maxFiles:5,colorsize:false }),
    ],
}
const logger = winston.createLogger(options);

logger.info('Hello World');