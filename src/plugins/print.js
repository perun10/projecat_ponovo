// var log = require('loglevel');
// var remote = require('loglevel-plugin-remote');
// log.enableAll()
// const defaults = {
//     url: 'localhost:3000/error',
//     method: 'POST',
//     headers: {},
//     token: '',
//     onUnauthorized: failedToken => {},
//     timeout: 0,
//     interval: 1000,
//     level: 'trace',
//     backoff: {
//         multiplier: 2,
//         jitter: 0.1,
//         limit: 30000,
//     },
//     capacity: 500,
//     stacktrace: {
//         levels: ['trace', 'warn', 'error'],
//         depth: 3,
//         excess: 0,
//     },
//     timestamp: () => new Date().toISOString(),
//     format: remote.plain,
// };
// // remote.apply()
// remote.apply(log , defaults);

// log.info('Log levels:');
// log.trace('trace message');
// log.debug('debug message');
// log.info('info message');
// log.warn('warn message');
// log.error('error message');

// export default log 