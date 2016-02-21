//Instantiating express and assigning this app for server.js
var express = require('express');
var app = express();

//Calling main.js in router folder set a callback and rendering using ejs
require('./main')(app);
app.set('views',__dirname+'/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

//Instantiating the server listening from port 3000 for a callback
var server = app.listen(3000, function(){
  console.log("We have started on port 3000");
});
