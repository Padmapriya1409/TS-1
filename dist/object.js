"use strict";
// object
// const person:{
//     name : string;
//     age : number;
// }={
const person = {
    name: "padhu",
    age: 25,
    hobby: ['drawing', 'games']
};
console.log(person.name, person.age);
for (const hobby of person.hobby) {
    console.log(hobby.toUpperCase());
}
// string
let favcolor;
favcolor = ["blue"];
console.log(favcolor);
// any 
let favfood;
favfood = ['chicken', 12, { "paarotta": "pics" }];
console.log(favfood);
// tuples
const helloo = {
    role: [4, 'priya']
};
helloo.role.push('adam');
//  helloo.role[1]=11  error
// helloo.role=[12,'priya','adam']  error
