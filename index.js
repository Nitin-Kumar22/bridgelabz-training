//1.hello world
console.log("Node.js Backend Started");   // print the message information to the console so developer understand

//2.variables
let name ="aman";   //String   declare a variable in a string
let age ="22";      //number    declare a variable in a number
const country ="India";     //constant  declare a variable in a string but data is secure
let isStudent = true;       //boolean      declare a boolean data type to output true or false

console.log("name",name);           // print the message information string  variable
console.log("age",age);                  // print the message information  number variable
console.log("country",country);              // print the message information  constant variable
console.log("isStudent",isStudent);              // print the message information boolean data

//Data Type
let score;          //undefined
let data=null;          //null
console.log(score);
console.log(data);

//Object




//operators
let a=10;
let b=5;

console.log("add:",a+b);
console.log("Sub:",a-b);
console.log("mul:",a*b);
console.log("div:",a/b);

//condition (if-else)
let loginAge=18;

if(loginAge>=18){
    console.log("Allowed to login");
}
else{
    console.log("Not Allowed");
}

//loop(for)
for(let i=1;i<=5;i++){
    console.log("loop count:",i);
}


//function
function add(x,y){
    return x+y;

}

let result =add(20,30);
console.log("function result:",result);


//simple Backend
const admin={
    username:"admin",
    password:"1234"
}; 
