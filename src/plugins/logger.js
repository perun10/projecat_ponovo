import winston from "winston"
const fs = require('fs');
const path = require('path');
import axios from 'axios'
const ob = {name: "WWW",test: "WWW"}
const axi = axios({
    method: 'post',
    url: 'http://localhost:3000/posts',
    data: 'data',
  })
  require('winston-daily-rotate-file');
//   var transport = new (winston.transports.DailyRotateFile)({
//     filename: 'application-%DATE%.log',
//     datePattern: 'YYYY-MM-DD-HH',
//     zippedArchive: true,
//     maxSize: '20m',
//     maxFiles: '14d'
//   });

  
const levels = { 
    error: 0, 
    warn: 1, 
    info: 2, 
    verbose: 3, 
    debug: 4, 
    silly: 5 
  };
//  const file = fs.createWriteStream('combined1111.log')
const logger = winston.createLogger({
    levels,
    format:winston.format.combine(
        winston.format.prettyPrint(),
        winston.format.json(),
        winston.format.colorize(),
        winston.format.splat(),
        winston.format.simple(),
    ),
    transports:[
        new winston.transports.Console(),
        // new winston.transports.File(tr)
        // new winston.transports.File({filename:logfilepath})
    ]
});

export default logger