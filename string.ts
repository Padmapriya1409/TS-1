// enum method...only in cap's
enum Role {ADMIN ="ADMIN" }

const press ={
    role:Role.ADMIN
}

// if (press.role === Role.ADMIN) { }
    console.log(press.role)

    function combine(input1:number,input2:number){
        const result = input1+input2
        return result
    }

const combinedAll =combine(45,50)
console.log(combinedAll)

function combines(input1:number | string,input2:number | string){
    let result
    if (typeof input1 === 'number' && typeof input2 === 'number') {
    result = input1+input2
    } else {
        return input1.toString()+input2.toString()
    }
        
    return result
}
const combinedAlll =combines(45,50)
console.log(combinedAlll)

const combinedNames = combines('priya','product')
console.log(combinedNames)