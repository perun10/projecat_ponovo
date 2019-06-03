import winston from "winston"
const {PassThrough,Writable} = require('stream')

      const errLogOptions = {
        host:'localhost',
        port:'3000',
        path:'error',
        level:'error'
      }
      const infoLogOption = {
        host:'localhost',
        port:'3000',
        path:'info',
        level:'info'
      }
      const path = 'warn'
      const level ='warn'

      const warnLogOption = {
        host:'localhost',
        port:'3000',
        path:'warn',
        level:'warn'
      }
      // console.log(warnLogOption)
      // firebase.firestore().collection('blogs').add()
const levels = { 
    error: 0, 
    warn: 1, 
    info: 2, 
    verbose: 3, 
    debug: 4, 
    silly: 5 
  };

  const myFormat = winston.format.printf(info => {
    return `${info.timestamp}: ${info.level}: ${info.message}: ${info.err}`;
  });
 
  const errorStackTracerFormat = winston.format(info => {
    if (info.meta && info.meta instanceof Error) {
        info.message = `${info.message} ${info.meta.stack}`;
        // console.log(typeof info.stack)
      }
      return info
      
        
    ;
});
//  const file = fs.createWriteStream('combined1111.log')

const console = new winston.transports.Console({
  format:winston.format.combine(
    winston.format.splat(),
      winston.format.colorize(),
      winston.format.simple(),
  ),
  level:'info'
})

const logger = winston.createLogger({
    levels,
    format:winston.format.combine(
      winston.format.splat(),
      errorStackTracerFormat(),   
      winston.format.simple(),
    ),
    transports:[

        new winston.transports.Http(errLogOptions),
        new winston.transports.Http(infoLogOption),
        new winston.transports.Http(warnLogOption),
        // new winston.transports.File(tr)
        // new winston.transports.File({filename:logfilepath})
    ]
});
logger.add(console)
export default logger