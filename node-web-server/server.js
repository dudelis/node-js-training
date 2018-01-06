const express = require('express');

var app = express();

app.get('/', (req, res)=>{
    //res.send('<h1>hello Express!</h1>');
    res.send({
        name: 'Konstantin',
        likes:['biking', 'riding']
    });
});
app.get('/about', (req, res)=>{
    res.send('It is me. ABout page');
});

app.get('/bad', (req, res)=>{
    var e = new Error();
    res.send(e);
});

app.listen(3000);