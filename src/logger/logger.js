const express = require('express');
const app = express();
const port = 3000;

// const handler = (func) => (req, res) => {
//     try {
//         logger.info('server.handler.begun');
//         func(req, res, logger);
//     } catch(e){
//         logger.info('server.handler.failed');
//         res.send('Oh no, something did not go well!');
//     }
// };

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
  
app.post('/error',(req, res) => { res.send('Yay!'); console.log(req.body); })

app.listen(port, () => console.log(`Example app listening on port ${port}!`))