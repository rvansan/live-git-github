const express = require('express');

const app = express();

app.get('/test', (req,res)=>{
    return res.json({message: 'hello world'});
});

app.listen(3333);