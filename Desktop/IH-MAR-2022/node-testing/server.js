const http = require('http');

// const server = http.createServer();
// arity- order of arguments
const server = http.createServer((request, response) => {
    console.log(`Someone has requested ${request.url}`);
   
    if (request.url === '/') {
      response.write('Hello, world!');
      response.end();
    } else if (request.url === '/about') {
      response.write('My name is Izzy');
      response.end();
    } else if (request.url === '/test') {
      response.write('This is the test page');
      response.end();
    } else if (request.url === '/whatever') {
      response.write("You're on the whatever page");
      response.end();
    } else if (request.url === '/login') {
      response.write("You have now logged out");
      response.end();
    } else {
      response.statusCode = 404;
      response.write('404 Page not found');
      response.end();
    }
  });

server.listen(3000);