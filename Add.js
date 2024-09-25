let {sub} = require('./Sub');

let data = {'name':'sagar','surname':'chougule','age':32,'subject':['Geoinformatics','Computer Science','Management']}

let valusub = sub(10,5);


console.log('The substractions is : ' + valusub);



function add(a,b,c){

    return a + b + c;
    
}


module.exports.add = add;
module.exports.valusub = valusub;
module.exports.data = data;

