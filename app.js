var express = require('express')
	, app = express()
  , server = require('http').createServer(app)
  , io = require('socket.io').listen(server);

app.use(express.static(process.cwd() + '/public'));

server.listen(3000);

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});

io.sockets.on('connection', function (socket) {
 
	socket.on('uiNeedsResults', function(data) {
    var results = [1,2,3]; // could be a mongo db call for example
		socket.emit('dataFetchedResults', { results: results });
	});



});