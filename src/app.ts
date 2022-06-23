// let message: string = 'Hello World';
// console.log(message);


function add(n1:number,n2:number,showresult:boolean,phrase:string){
// // console.log(typeof number1)
// if (typeof n1 !=='number' || typeof n2 !== "number") {
//     throw new Error("incorrect input!..")
// }
const result =n1+n2
if (showresult) {
    console.log(phrase +n1+n2)
} else {
    return n1+n2
}

}

// const number1=10;

// Assignment operators
let number1:number; 
number1=4;

const number2=3.9;
const printresult=true;
const resultphrase='result is::'

const result = add(number1,number2,printresult,resultphrase)
console.log(result)
