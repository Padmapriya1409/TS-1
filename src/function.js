"use strict";
function addd(n1, n2) {
    return n1 + n2;
}
function printresults(num) {
    console.log('result:' + num);
}
printresults(addd(67, 89));
// :void = undefined
function addHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
// arrow function
let combinevalues;
combinevalues = addd;
console.log(combinevalues(12, 80));
// callback func
addHandle(34, 76, (result) => {
    console.log(result);
});
// unknown type
let userType;
let userInput;
userType = person;
userInput = "level high";
if (typeof userType === 'string') {
    userType = userInput;
}
