
const add = (a,b) =>{
if(a == NAN || b == NaN){

    throw new Error("You need to enter a number")
}

return a + b

}

export {add}