var http = require('http');

http.createServer(function(rec, res){

    res.end('Ola bem vindo ao res do servidor!');


}).listen(8099);

console.log('Servidor rodando!');