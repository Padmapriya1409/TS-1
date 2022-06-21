function addd(n1:number , n2:number){
    return n1+n2
}

function printresults(num:number){
    console.log('result:' +num)
}

printresults(addd(67,89))

// :void = undefined

function addHandle(n1:number,n2:number,cb:(num:number) =>void){
    const result=n1+n2;
    cb(result)
}


// arrow function
let combinevalues : (a:number,b:number)=> number
combinevalues=addd

console.log(combinevalues(12,80))

// callback func

addHandle(34,76,(result)=>{
    console.log(result)
})


// unknown type
let userType:unknown
let userInput:string

userType = person
userInput= "level high"
if (typeof userType === 'string'){
    userType = userInput
}