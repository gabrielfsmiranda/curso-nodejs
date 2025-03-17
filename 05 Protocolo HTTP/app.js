var http = require('http');

http.createServer(function(req, res){
    res.end("Hello World");
}).listen(8081);

console.log("O Servidor está rodando!");

//Para não precisar reiniciar o servidor toda hora existe o Nodemon que automatiza isso

//não trabalhamos com o req do protocolo http aqui tb...