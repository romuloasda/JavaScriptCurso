const http = require('http');

const server = http.createServer((req, res) => {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');
	res.end('Ola mundo! Servidor nativo rodando.');
});

server.listen(3000, '127.0.0.1', () => {
	console.log('Servidor rodando em http://localhost:3000/');
});