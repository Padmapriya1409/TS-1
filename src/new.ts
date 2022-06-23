const button = document.querySelector('button')

button?.addEventListener('click',()=>{
    console.log('clickeezzz')
})

const map = new Map();

// const
const username = "parthi"
// username="parthee"
console.log(username)

// let

let widthsize=30;
console.log(widthsize)

// var
ages =42;
var ages;

if(ages>20){
    let isOld=true
}

function adds(a:number,b:number){
    let result;
    result = a-b
    return result

}
console.log(result)

// arrow funcs
const suub =(a:number , b:number) =>a*b
const printop :(a:number|string)=>void =output => console.log(output)

printop(suub (59,12))

if (button) {
 button.addEventListener('click',event =>console.log(event))    
}

// default params
const subb =(a:number , b:number=12) =>a/b 
console.log(subb(347))

// spread operator
const movie =['don','vikram','O2']
const movie1 =['virus','blacksheep',...movie]
const movie2 =['virus','blacksheep','appa']

movie1.push(...movie,...movie2)


const poor={
    age:12,
    nammmee:'markz',
    module:'ratings',
    ranks:30
}
const poordetails={...poor,...movie1}
