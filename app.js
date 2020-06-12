const express = require('express');

const app = express();



app.use('/user', (req, res)=>{

  res.send('<h1>This is the user page!!!!</h1>');

});

app.use('/', (req, res)=>{

  res.send('<h1>Welcomeeee!!!!</h1>');

});

app.listen(3000)