// Given a random non-negative number, you have to return the digits of this number
// within an array in reverse order.
// Example: 348597 => [7,9,5,8,4,3]

function digitize(n) {
  
    return n.toString() //convert n to string
    .split("")
    .reverse()
    .map((x)=> Number(x));
  
}

console.log((digitize(35231),[1,3,2,5,3]));