
const chokidar = require('chokidar')

const watcher = chokidar.watch('**/*.svg', {ignored: /[\/\\]\./,ignoreInitial:true})

watcher.on('all', function(event, path) {
   
     require('child_process').exec('npm run generate-icons')
  
  console.log(event, path);
});