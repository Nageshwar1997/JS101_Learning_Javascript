// node problem9b.js
let a=10;
let b=10;
let c=10;

if(a>b){
  console.log("a is greater");
}
else if(b>c){
  console.log("b is greater");
}
else if(c>a){
  console.log("c is greater");
}
else if((a==b)&&(b==c)&&(a==c)){
  console.log("a & b & c all are equal");
}
else{
  console.log("a & b & c are not equal");
}
