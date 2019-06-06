const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs');
// const handler = (func) => (req, res) => {
//     try {
//         logger.info('server.handler.begun');
//         func(req, res, logger);
//     } catch(e){
//         logger.info('server.handler.failed');
//         res.send('Oh no, something did not go well!');
//     }
// };
// const errorStream =  fs.createWriteStream('./error.log');
app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	next();
});

app.post('/error', (req, res) => {
	res.send('Errors are stored in logs!');
	var body = '';
	var filePath = '../logs/error.log';
	req.on('data', function(data) {
		body += data;
		console.log('Errori upisani');
	});
	req.on('end', function() {
        let template = `
            DATE MESSAGE type: error
        `;
		fs.appendFile(filePath, body, function() {
			res.end();
		});
	});
});

app.post('/combined', (req, res) => {
	res.send('Comined logs are stored in /logs/combined.log !');
	var body = '';
	var filePath = '../logs/combined.log';
	req.on('data', function(data) {
		body += data;
		console.log('Svi logovi upisani');
	});
	req.on('end', function() {
		fs.appendFile(filePath, body, function() {
			res.end();
		});
	});
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
