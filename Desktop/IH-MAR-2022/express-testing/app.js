const express = require('express');
 
// We create our own server named app
// Express server will be handling requests and responses
const app = express();

app.use(express.static('public'));



// GET is the verb
app.get('/', (request, response, next) => {
    console.log(request);
    response.send('<h1>Welcome Ironhacker. :)</h1>')
  });

  app.get('/home', (request, response, next) => 
  response.sendFile(__dirname + '/views/home-page.html')
  );
 
  app.get('/cat', (request, response, next) => 
  response.sendFile(__dirname + '/views/cat-page.html')
  );
  
app.get('/students', (request, response, next) => {
    console.log(request);
    response.send('<ul><li>Max</li><li>Luis</li><li>Alex</li></ul>')
  });
app.get('/students/:name', (request, response, next) => {
    console.log(request.params);
    response.send(`<p>This is ${request.params.name}'s page</p>`)
  });


app.listen(3000, () => console.log('My first app listening on port 3000! '));