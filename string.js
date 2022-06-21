// enum method...only in cap's
var Role;
(function (Role) {
    Role["ADMIN"] = "ADMIN";
})(Role || (Role = {}));
var press = {
    role: Role.ADMIN
};
// if (press.role === Role.ADMIN) { }
console.log(press.role);
function combine(input1, input2) {
    var result = input1 + input2;
    return result;
}
var combinedAll = combine(45, 50);
console.log(combinedAll);
function combines(input1, input2) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    }
    else {
        return input1.toString() + input2.toString();
    }
    return result;
}
var combinedAlll = combines(45, 50);
console.log(combinedAlll);
var combinedNames = combines('priya', 'product');
console.log(combinedNames);
