
const winston = require('winston');
const logform = require('logform');
// const fs = require('fs');
// const path = require('path');
// const filename = path.join(__dirname, 'created-logfile.log');
const errLogOptions = {
	host: 'localhost',
	port: '3000',
	path: 'error',
	level: 'error'
};
const combinedLogOption = {
	host: 'localhost',
	port: '3000',
	path: 'combined',
	level: 'info'
};
// const warnLogOption = {
// 	host: 'localhost',
// 	port: '3000',
// 	path: 'warn',
// 	level: 'warn'
// };

const levels = {
	error: 0,
	warn: 1,
	info: 2,
	verbose: 3,
	debug: 4,
	silly: 5
};

const errorStackTracerFormat = winston.format((info) => {
	if (info.meta && info.meta instanceof Error) {
		info.message = `${info.message} ${info.meta.stack}`;
	}
	return info;
});

const allErrors = logform.format((info)=>{
	// console.log(info) {"message":"Uncaught TypeError: Cannot read property 'reading' of undefined","level":"warn"}
	window.onerror = function(response){
		// info.level = "error";
		info.message = `${response}` ;		
		return info
	}
	console.log(info)
	return info
});

const logger = winston.createLogger({
	levels,
	format: winston.format.combine(
    winston.format.splat(), 
		errorStackTracerFormat(),
		winston.format.timestamp(),
		winston.format.simple(),
		allErrors()
		),
	transports: [
      // new winston.transports.File({filename})
		new winston.transports.Http(errLogOptions),
		new winston.transports.Http(combinedLogOption),
		// new winston.transports.Http(warnLogOption)
	]
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.simple(),
    )
  }));
}


module.exports = logger