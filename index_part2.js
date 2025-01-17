let age = 25;
age = 21;
console.log(age); //This is called dynamic typed language
const age2 = 25;
age = 21;
console.log(age); //Cannot assign to "age" because it is a constant
console.log(false || 3);
let ans = false || true || false || false; //This is called short circuiting. It means when we work with the OR condition. When the compiler will see the true firts time. Then it will directly print the true without checking the reamining value.
console.log(ans);
console.log("Now we will bitwise operator.");
console.log("Right shift. In this number get divided by 2.");
console.log(5 >> 1); //Here 1 means that how many times bit you want to shift
//In left shift the number get multipiled by 2.
console.log(5 << 1);
console.log("Now we will the <if-else></if-else>");
let age1 = 25;
if (age1 >= 18) {
  console.log("Your age is " + age1 + ", You can vote");
} else {
  console.log("You can't vote.");
}
console.log("Now we will see the for loop condition");
for (let i = 0; i < 10; i++) {
  if (i == 4) {
    break; //It will stop the iteration when this condition get statisfy.
    //Output will be 0,1,2,3.
  }
  console.log(i);
}
console.log("Continue statement below");
//Now we will see the continue
for (let i = 0; i < 10; i++) {
  if (i == 4) {
    continue; //It will skip iteration untill the condition are statisfing.
    //The output will be 0 to 9 except 4 because continue statement.
  }
  console.log(i);
}
console.log("Now we will see the string");
let str = `Hello
    sir 
    I am 
        Suman Shekhar`;
console.log(str);
let name = "Suman Shekhar";
console.log("My name is " + name); //This is called cocatenation.
console.log("Calculate the length");
console.log(name.length); //By length you can count the length of the string
class human {
  //properities
  age; //they are public class.
  wt = 80;
  ht = 180;
  //If we want to make the private class we can use # for making properites private/
  #mobile = 9466;
  constructor(newage) {
    this.age = newage;
  }
  //behaviour
  phone() {
    console.log("Your phone number is ", this.#mobile);
  }
  walking() {
    console.log("You have taken one step");
  }
  eating() {
    console.log("You have eaten burger");
  }
  get fetchmobile() {
    //this will allow to fetch the value of private field outside of the class.
    return this.#mobile;
  }
  set modifyWeight(val) {
    this.wt = val;
  }
}
//Now we will make the object
let n = 25;
let obj = new human(n);

//This is object
console.log(obj.age);
// console.log(obj.#mobile);output is Private field '#mobile' must be declared in an enclosing class
//obj.phone();
console.log(obj.fetchmobile);
obj.modifyWeight = 75; // No parentheses, just assignment
console.log("your updated weight is:", obj.wt);
console.log(obj.age);

//Here we will see the default parameter
function myname(name = "Suman Shekhar") {
  console.log("My name is: ", name);
}
myname(); //Output is My name is:  Suman Shekhar.
myname("Manu"); //My name is:  Manu.

//Now we will see the in built object

console.log(Math.PI);
console.log(Math.max(10, 20, 30, 40));
console.log(Math.min(10, 20, 30, 40));
console.log(Math.round(1.6));
console.log(Math.floor(1.9));
console.log(Math.ceil(1.1));
console.log(Math.abs(-5));
console.log(Math.random());
console.log(Math.pow(5, 2));
console.log(Math.sqrt(100));
//Now we wil date object
let curr = new Date();
console.log(curr.toUTCString());
//Now we will see the object cloning
let obj = {
  age: 21,
  wt: 85,
  ht: 180,
};
console.log(obj);
obj.color = "Red";
console.log(obj);

//1st type of clonong is spread operator
let src = { age: 12 };

let des5 = { ...src };
src.age = 21;
console.log(des5);
console.log(src);
//This object cloning is done by Assign
let src = { phone: 9466940 };
let dest1 = Object.assign({}, src);
console.log(dest1);
//Now we will the third interation method for object cloning
let src20 = {
  age: 15,
  wt: 75,
  ht: 180,
};
let dest20 = {};
for (let key in src20) {
  let newkey = key;
  let newvalue = src20[key];
  //object cloning
  dest20[newkey] = newvalue;
}
console.log(dest20);
//Now we will see the object cloning
let obj = {
  age : 21,
  wt: 85, 
  ht : 180
}
console.log(obj)
obj.color = "Red";
console.log(obj)
//1st type of clonong is spread operator
let src = {age:12};

let des = {...src};
src.age = 21;
console.log(des);
console.log(src);
//This object cloning is done by Assign
let src={phone:9466940}
let dest = Object.assign({},src);
console.log(dest)

//Now we will the third interation method for object cloning
let src28 = {
  age : 15,
  wt:75,
  ht : 180
}
let dest28={};
for(let key in src28)
{
  let newkey = key;
  let newvalue = src28[key];
  //object cloning
  dest28[newkey] = newvalue;
}
console.log(dest28)

//Now we will how to handle the error
try{
  console.log("Try block start here")
  console.log(x)
}
catch(e)
{
  console.log("We are working on it");
}