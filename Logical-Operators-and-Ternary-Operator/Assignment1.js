let age = 25;

// ((13 <= 19) == age) && ((20 <= 29) == age) ? console.log("Teenage") : console.log("Twenties");

if(13<=age && age<=19){
  console.log("Teenage");
}
else if(20<=age && age<=29){
  console.log("Twenties");
}
else{
  console.log("Younger");
}