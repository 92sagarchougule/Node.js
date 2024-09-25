let http = require('http');

let server = http.createServer((req, res)=>{
    res.write('<h1>Code goes here to work further smart</h1>');
    res.write('<h1>Sagar</h1>');
    res.write('<h1>Chougule</h1>');
    res.write('<h1>sagar4gis@gmail.com</h1>');
    res.write('<h1>Geoinformatics</h1>');
    res.write('<h1>like take above</h1>');
    res.end();
})

server.listen(2000,()=>{console.log('its working fine')});


module.exports.server = server;