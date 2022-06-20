// let message: string = 'Hello World';
// console.log(message);
function add(n1, n2, showresult, phrase) {
    // // console.log(typeof number1)
    // if (typeof n1 !=='number' || typeof n2 !== "number") {
    //     throw new Error("incorrect input!..")
    // }
    var result = n1 + n2;
    if (showresult) {
        console.log(phrase + n1 + n2);
    }
    else {
        return n1 + n2;
    }
}
var number1 = 10;
var number2 = 3.9;
var printresult = true;
var resultphrase = 'result is::';
var result = add(number1, number2, printresult, resultphrase);
console.log(result);
