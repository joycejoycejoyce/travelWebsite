const path = require('path');
const express = require('express');



const app = express(); 

const hostname = '127.0.0.1'; 
const port = 3000; 

// use the static files: css, images, js files 
app.use(express.static(__dirname + '/public'));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
}); 

app.listen(port, () => {
    console.log(`Server is running at port: ${port}`); 
});