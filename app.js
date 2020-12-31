const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'build'))); //defining the directory name for the path

app.get('*', (req,res)=>{
    res.sendFile(path.join(__dirname,'build/index.html')); // defining the path for running the index.html file on the express app
})

module.exports = app;