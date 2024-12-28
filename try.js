console.log("Jai Shree Ram");
var x = 10;
console.log(x);
var x = 20; // Redeclaring `x` using `var` is allowed.
console.log(x);

let a = 10;
console.log(a);
// Cannot access `b` outside of block scope.
{
    let b = 20; // `let` provides block scope.
}
// console.log(b); // Uncommenting this will throw an error.

// Cannot redeclare `a` when using `let`.
// let a = 20; 

// Dynamically typed language example.
a = "Radhe"; // Changing type of `a` from number to string.
console.log(a);

// Constant variable
const n = 20; // `const` declares a constant that cannot be reassigned.
console.log(n);

// Logical operators
let ans = (true && false && true); // Evaluates to `false`.
console.log(ans);

let op = (true || false || false); // Evaluates to `true`.
console.log(op);

let no = !(false); // `!` inverts the boolean value.
console.log(no);

// Non-boolean examples using truthy and falsy values.
let non = (false || 3); // Outputs `3` as `3` is truthy.
console.log(non);

let non1 = (false && 3); // Outputs `false` as `false` is falsy.
console.log(non1);

let non2 = !(3); // Outputs `false` as `3` is truthy.
console.log(non2);

// Bitwise operators
console.log(~(0)); // `~` flips all the bits.
console.log(2 ^ 2); // XOR operation.
console.log(2 ^ 3); // XOR operation with different inputs.

console.log(5 << 1); // Left shift: multiplies by 2.
console.log(10 >> 1); // Right shift: divides by 2.

// Example of if-else
let age = 15;
if (age >= 18) {
    console.log("You can vote to BJP.");
} else {
    console.log("Tum abhi bache ho");
}

// Loops
for (let i = 1; i < 10; i++) {
    console.log("Jai Shree Ram"); // Prints the phrase 9 times.
}

for (let i = 10; i >= 1; i--) {
    console.log(i); // Prints numbers from 10 to 1.
}

console.log("We will see the break keyword");
for (let i = 1; i <= 10; i++) {
    if (i == 5) {
        break; // Exits the loop when `i` is 5.
    }
    console.log(i);
}

console.log("We will see the continue keyword");
for (let i = 1; i < 10; i++) {
    if (i == 4) {
        continue; // Skips the iteration when `i` is 4.
    }
    console.log(i);
}

console.log("We will see the while loop");
let i = 1;
while (i <= 5) {
    console.log(i); // Prints numbers from 1 to 5.
    i++;
}

console.log("We will do reverse number");
let j = 5;
while (j >= 1) {
    console.log(j); // Prints numbers from 5 to 1.
    j--;
}

// Strings and operations
let fname = "Suman";
let lname = "Shekhar";
console.log(fname + " " + lname); // Concatenates first and last name.
let str = `Hello
Kaise
ho// Template literals for multiline strings.
app`; 
console.log(str);

// Functions
function print() {
    for (let i = 1; i <= 5; i++) {
        console.log(i); // Prints numbers from 1 to 5.
    }
}
print();

function getaverage(num1, num2) {
    let avg = (num1 + num2) / 2; // Calculates average.
    console.log("average: ", avg);
}
getaverage(34, 35);

// Object example
let obj = {
    "myname": "Suman Shekhar",
    "age": 21,
    "Education": "B.Tech"
};
console.log(obj);

// Array operations
let arr = [1, 2, 3, 4, 5];
console.log(arr[2]); // Accessing element at index 2.

let crr = [1, 2, 3];
let anscrr = crr.map((number) => {
    return number * number; // Returns the square of each element.
});
console.log(anscrr);

let farr = [10, 20, 30, 45, 51, 60, 43, 89];
let ansfrr = farr.filter((number) => {
    return number % 2 == 0; // Filters even numbers.
});
console.log(ansfrr);
