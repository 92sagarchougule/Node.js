let {sub} = require('./Sub');



let valusub = sub(10,5);


console.log('The substractions is : ' + valusub);



function add(a,b,c){

    return a + b + c;
    
}

let data = {'name':'sagar','surname':'chougule','age':32,'subject':['Geoinformatics','Computer Science','Management']}


module.exports.add = add;
module.exports.valusub = valusub;
module.exports.data = data;

