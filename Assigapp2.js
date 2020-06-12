const express = require('express');

const app = express();



app.use('/user', (req, res)=>{

  res.send('<h1>This is jimmy page!!!!</h1>');

});

app.use('/', (req, res)=>{

  res.send('<h1>Welcomeeee & thank you for visiting!!!!</h1>');

});

app.listen(3000)