// object
// const person:{
//     name : string;
//     age : number;
// }={
var person = {
    name: "padhu",
    age: 25,
    hobby: ['drawing', 'games']
};
console.log(person.name, person.age);
for (var _i = 0, _a = person.hobby; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
// string
var favcolor;
favcolor = ["blue"];
console.log(favcolor);
// any 
var favfood;
favfood = ['chicken', 12, { "paarotta": "pics" }];
console.log(favfood);
// tuples
var helloo = {
    role: [4, 'priya']
};
helloo.role.push('adam');
//  helloo.role[1]=11  error
// helloo.role=[12,'priya','adam']  error
