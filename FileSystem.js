let fs = require('fs');  //fs stands for File System

function filesystem(){

// Asyncronous Code
 fs.readFile("data.txt", "utf8",(err,data)=>{
    if(err) console.log(err);
    return data;
});


// // Syncronous Code
// let data = fs.readFileSync('data.txt');
// console.log(data.toString());


console.log('this is came before because of asyncronous method of node.js');

}

filesystem();

module.exports.filesystem = filesystem;