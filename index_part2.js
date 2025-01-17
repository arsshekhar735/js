// Declaring a variable 'age' with an initial value of 25
let age = 25;
// Reassigning a new value to the 'age' variable (this works because 'let' allows reassignment)
age = 21;
console.log(age); // This demonstrates dynamic typing in JavaScript, where variables can change their type and value dynamically.

// Declaring a constant 'age2' with a value of 25
const age2 = 25;
// Reassigning 'age' is fine, but reassigning 'age2' will throw an error since it's a constant.
age = 21; 
console.log(age); // Output: 21
// console.log(age2); // Uncommenting this line would cause an error, as 'age2' is a constant and can't be reassigned.

console.log(false || 3); // Output: 3, since OR (||) operation short-circuits when the first truthy value (3) is found.

let ans = false || true || false || false; 
// This demonstrates short-circuiting in logical OR operations. The first true value makes the rest irrelevant.
console.log(ans); // Output: true

console.log("Now we will explore bitwise operators.");

// Right shift (>>) operator: It divides the number by 2 for each shift to the right.
console.log(5 >> 1); // Output: 2, 5 divided by 2 is 2 (integer division).

// Left shift (<<) operator: It multiplies the number by 2 for each shift to the left.
console.log(5 << 1); // Output: 10, 5 multiplied by 2 is 10.

console.log("Now we will explore 'if-else' statements.");
let age1 = 25;
if (age1 >= 18) {
  console.log("Your age is " + age1 + ", You can vote");
} else {
  console.log("You can't vote.");
}

console.log("Now we will explore the 'for' loop.");

// Using a 'for' loop to print numbers from 0 to 3, breaking when i reaches 4.
for (let i = 0; i < 10; i++) {
  if (i == 4) {
    break; // The loop stops here when the condition i == 4 is met.
    // Output will be: 0, 1, 2, 3
  }
  console.log(i);
}

console.log("Now we will explore the 'continue' statement.");

// Using a 'for' loop to print numbers from 0 to 9, but skipping the number 4 using 'continue'.
for (let i = 0; i < 10; i++) {
  if (i == 4) {
    continue; // Skips the current iteration when i equals 4.
    // Output will be: 0, 1, 2, 3, 5, 6, 7, 8, 9
  }
  console.log(i);
}

console.log("Now we will explore strings.");

// Template literals allow multi-line strings and string interpolation.
let str = `Hello
    sir 
    I am 
        Suman Shekhar`;
console.log(str);

// Concatenation of strings using '+' operator
let name = "Suman Shekhar";
console.log("My name is " + name); // This is called string concatenation.

console.log("Calculating the length of a string:");
console.log(name.length); // The 'length' property returns the number of characters in the string.

console.log("Now we will explore classes in JavaScript.");

// Class definition with properties and methods
class Human {
  // Properties (fields)
  age; // Public property, can be accessed directly.
  wt = 80; // Default value for weight.
  ht = 180; // Default value for height.
  #mobile = 9466; // Private property, denoted by '#'.

  constructor(newAge) {
    this.age = newAge; // Constructor initializes the 'age' property.
  }

  // Methods (behaviors)
  phone() {
    console.log("Your phone number is ", this.#mobile); // Accesses the private mobile property within the class.
  }

  walking() {
    console.log("You have taken one step");
  }

  eating() {
    console.log("You have eaten a burger");
  }

  get fetchMobile() {
    // Getter to access private property '#mobile' from outside the class.
    return this.#mobile;
  }

  set modifyWeight(val) {
    // Setter to modify the weight property.
    this.wt = val;
  }
}

// Create an instance (object) of the Human class
let n = 25;
let obj = new Human(n);

// Accessing properties of the object
console.log(obj.age); // Accessing the 'age' property of the object.
console.log(obj.fetchMobile); // Accessing the private 'mobile' property through the getter.

obj.modifyWeight = 75; // Using the setter to modify the weight without parentheses.
console.log("Your updated weight is:", obj.wt); // Output the updated weight.
console.log(obj.age); // Output the age of the human object.

console.log("Now we will explore default parameters.");

// Function with a default parameter
function myName(name = "Suman Shekhar") {
  console.log("My name is: ", name);
}
myName(); // Output: My name is: Suman Shekhar.
myName("Manu"); // Output: My name is: Manu.

console.log("Now we will explore built-in Math functions.");

// Some useful Math functions
console.log(Math.PI); // The value of Pi.
console.log(Math.max(10, 20, 30, 40)); // Returns the largest number.
console.log(Math.min(10, 20, 30, 40)); // Returns the smallest number.
console.log(Math.round(1.6)); // Rounds a number to the nearest integer.
console.log(Math.floor(1.9)); // Rounds a number down to the nearest integer.
console.log(Math.ceil(1.1)); // Rounds a number up to the nearest integer.
console.log(Math.abs(-5)); // Returns the absolute value of a number.
console.log(Math.random()); // Generates a random number between 0 (inclusive) and 1 (exclusive).
console.log(Math.pow(5, 2)); // Raises a number to the power of another number (5^2 = 25).
console.log(Math.sqrt(100)); // Returns the square root of a number.

console.log("Now we will explore Date objects.");

// Date object to get the current date and time
let curr = new Date();
console.log(curr.toUTCString()); // Converts the current date to UTC string format.

console.log("Now we will explore object cloning.");

// Creating an object
let obj = {
  age: 21,
  wt: 85,
  ht: 180,
};
console.log(obj); // Output: the original object.

obj.color = "Red"; // Adding a new property to the object.
console.log(obj); // Output: the object with the new color property.

// First method of cloning: Spread operator
let src = { age: 12 };
let des5 = { ...src }; // Cloning the 'src' object into 'des5'.
src.age = 21; // Modifying the original 'src' object.
console.log(des5); // Output: { age: 12 }, 'des5' is unaffected.
console.log(src); // Output: { age: 21 }, 'src' is modified.

// Second method of cloning: Object.assign
let src2 = { phone: 9466940 };
let dest1 = Object.assign({}, src2); // Cloning 'src2' into 'dest1'.
console.log(dest1); // Output: { phone: 9466940 }

// Third method of cloning: Looping through the object properties
let src20 = {
  age: 15,
  wt: 75,
  ht: 180,
};
let dest20 = {};
for (let key in src20) {
  let newKey = key;
  let newValue = src20[key];
  // Cloning the key-value pair into the 'dest20' object.
  dest20[newKey] = newValue;
}
console.log(dest20); // Output: the cloned object.

console.log("Now we will see how to handle errors in JavaScript.");

// Error handling using try-catch block
try {
  console.log("Try block starts here");
  console.log(x); // This will throw an error since 'x' is not defined.
} catch (e) {
  console.log("We are working on it"); // This message is displayed when an error occurs.
}
