 // Given 3 numbers (all different values), print which is greatest

let a=1500;
let b=500;
let c=1000;

//Ternary Operator

// ((a>b) && (a>c)) ? console.log("a is greater") : ((b>a) && (b>c)) ? console.log("b is greater"): console.log("c is greater");



// Conditional Operator

if((a>b) && (a>c)){
  console.log("a is greater");
}
else if((b>a) && (b>c)){
  console.log("b is greater");
}
else{
  console.log("c is greater");
}