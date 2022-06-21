function addd(n1, n2) {
    return n1 + n2;
}
function printresults(num) {
    console.log('result:' + num);
}
printresults(addd(67, 89));
// :void = undefined
function addHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
// arrow function
var combinevalues;
combinevalues = addd;
console.log(combinevalues(12, 80));
// callback func
addHandle(34, 76, function (result) {
    console.log(result);
});
// unknown type
var userType;
var userInput;
userType = person;
userInput = "level high";
if (typeof userType === 'string') {
    userType = userInput;
}
