// Given stored username and password and input username and password, Print if the user can login or not.

// node problem12a.js

//while you login.

let username = "Nageshwar";
let password = "NG";

// this username and password are stored in the database

let login_username = "Nageshwar";
let login_password = "NG";

// when you try to login , the code with compare the username and password with the username and password in database.

if ((login_username == username) && (login_password == password)) {
  console.log("i can login");
}
else {
  console.log("your credentials are not matching");
}