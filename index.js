console.log("Jai Shree Ram");
var x = 10;
console.log(x);
var x = 20;
console.log(x);


let a = 10;
console.log(a);
//cannot able to access outside of block
// {
//     let b = 20;
// }
// console.log(b);
//Cannot redeclared
// let a = 20;
// console.log(a);
//Dynaical typed language
a = "Radhe";
console.log(a);

//const
const n = 20;
console.log(n);

// n = 220; //cannot be change the value
// const n;//cannot redeclared the variable
// conts n = 500;//cannot do this 

//This is and logical operator.If anyone is false then it will give false response
let ans = (true && false && true);
console.log(ans);
//This will be or logical operator. If anyone is true then it will give true response

let op = (true || false || false);
console.log(op);

// Now we will see the not case.Means that if we will write false with !. Then it will give opposite thing. for example below code output will be true.
let no = !(false);
console.log(no);

//Now we will see the working with non booleans. It means that (false && 3), (false && 'Radhe Radhe'). So working with non boolean, there is 
//two terms called falsey and truthy.
//Falsey include undefined, null, 0, empty string' ',false, NaN.
//Truthy means that anything which is not falsey.

let non = (false || 3); //output is 3.
console.log(non);

let non1 = (false && 3); //output is false.
console.log(non1);

let non2 = !(3); //output is false.
console.log(non1);


//Bitwise Operator. In this and, or, xor, <<, >>.
//in add means both contain true means then only it will give true.
//In false means anyone if true then it will give true.
//In XOR if same thing is then it will give false and opposite thing will give true. EX- 0,0 => 0, 0,1=> 1.

console.log(~(0)); 

console.log(2 ^ 2);//This is XOR.
console.log(2 ^ 3);

//Now we will see the left shift and right shift.
//When we do left shift(<<) then it get multiplied by 2. 
//For example 5 after left shift it become 10.
console.log(5 << 1); //here 1 represent how many times it should do the left shift.
//Now we will do right shift (>>) then it become divided by 2.
console.log(10 >> 1);

// Now we will see the IF - ELSE 

//see the one example.
let age = 15//input("Enter the age");
if(age >= 18)
{
    console.log("You can vote to BJP.");
}
else{
    console.log("Tum abhi bache ho");
}


//Loops - set of instruction that need to run repeately then there we use loops.
//There are 3 types of loops - for, while, do while.

for(let i = 1; i < 10; i++) // i = 1 => initailisation; i < 10 => condition; i++  => updation
{
    console.log("Jai Shree Ram"); //loop logic
}

//Now we will do reverse counting

for(let i = 10; i >= 1; i--)
{
    console.log(i)
}
//now we will see the break keyboard
console.log(" we will see the break keyboard");

for(let i = 1; i <= 10; i++)
{
    if(i == 5)
    {
        break;
    }
    else
    {
        console.log(i);
    }
}

//Now we will see the continue keyboard
console.log("we will see the continue keyboard");
for(let i = 1; i < 10; i++) //it will skip the 4 and remaining print as it.
{
    if(i == 4)
    {
        continue;
    }
    else
    {
        console.log(i);
    }
}
 

//Now we will see the while loop
console.log("we will see the while loop");
let i = 1;
while(i <= 5)
{
    console.log(i);
    i++;
}
//Now we will do reverse number
console.log("we will do reverse number");
let j = 5;
while(j>=1)
{
    console.log(j);
    j--;
}

for(let i = 10; i < 20; i++)
{
    console.log()
}



//Now we will see the string=> sequence of character.
//Now we will see the concatenation
let fname = "Suman";
let lname = "Shekhar";
console.log(fname +" "+ lname);
//This is also a way to declare the string
let str = `Hello
Kaise
ho
app`;
console.log(str);
//Now we will calculate the length of string.
console.log("we will calculate the length of string");
console.log(fname.length);

//Now we will see how to do UPPERCASE and lowercase

console.log(fname.toUpperCase());
console.log(lname.toLowerCase());
//Here we will see how to access the character of string.
//In this (2,10). This will print charcater form 2 to 10. That means it will include 2 and exclude the 10.
let srr = "Hanumanjee";
console.log(srr.substring(2));
console.log(srr.substring(2,6));
console.log(srr.substring(0,10));


//Now we will see how to spilt the string.
console.log("we will see how to spilt the string.");
let pname = "Bolo Radhe Radhe";
let words = pname.split(' ');//this (' ') say on which basis you are spilting the string.
console.log(words);
//Now we will spilt the string over 'h' character

let ssname = "Today is the day of do.";
let sspilt = ssname.split('t');
console.log(sspilt);

//Now we will see the function:- reusable code \, enhance code readability
//Now we will see the basic syntax of the code

function myfirstf(){ //function declaration
    console.log("My first function");
}
myfirstf(); //function calling

console.log("Print number upto n using function");

function print(){ //function defined
    for(let i = 1; i <= 5; i++)
    {
        console.log(i);
    }
}

print()//function calling

//Now we will see the function with passing parameter
let number = 10;
function printN(number){ //(number) is called parameter
    for(let i = 0; i <= number; i++)
    {
        console.log(i);
    }
    
}
printN(number);//(numb) is called arguments

//We can send multiple parameter in function
console.log("We can send multiple parameter in function");
function getaverage(num1, num2){
    let avg = (num1+num2)/2;
    console.log("average: ",avg);
}

getaverage(34,35);

//Now we will see the Return Function => The function which return something 

console.log("we will see the Return Function");
function getSum(aa,bb,cc){
    //let sum = aa+bb+cc;
    return aa+bb+cc;;
}

let sans = getSum(1,2,3);
console.log("Printing Sum: ",sans);

//Now we will define the function using variable. IN THIS NO NEED TO GIVE NAME TO FUNCTION
console.log("we will define the function expression (using variable)");

let getMul = function(aaa,bbb){
    return aaa*bbb;
}
//let ans2 = getMul
console.log(getMul(34,35));

//Now we will see the arrow function.
console.log("we will see the arrow function.");

let getDiv = (g,h) => { // here no need to write the function or function name just define the variable and use => after parameters
    return g/h;
}

console.log(getDiv(34,35));

//Now we will see the Object.
console.log("we will see the Object.");
//The object is collection of key-value pairs

let obj = {
    "myname" : "Suman Shekhar",
    "age": 21,
    "Education": "B.Tech"
};

console.log(obj);
console.log(typeof(obj));//This will type of variable

//Now we will see the Array.
console.log("we will see the Array.");
//Creation of Arrays
let arr = [1,2,3,4,5];
console.log(arr);
console.log(typeof(arr));
//array constructor
let brr = new Array('Suman',1,'Shekhar');

console.log(typeof(brr));

console.log(arr[2]);//Through index we can acess the elemnt of the array.
//Now we will see some built in function in Array.
brr.push('Singh');
console.log(brr);

brr.pop();
console.log(brr);

brr.shift();
console.log(brr);
brr.unshift('Suman');
console.log(brr);


console.log(brr.slice(1,2));

//Now we will see the MAP function

let crr = [1,2,3];
//We will make the square of the element of the array using map function
//Map functin is where we run any process on existing function/array/items.
let anscrr = crr.map((number) => {//here we used map function and we made the function using array function.
    return number*number;
})
console.log(anscrr);

console.log(typeof(anscrr));

console.log(typeof(crr));

//Now we will see the filter thing.
console.log("we will see the filter thing.");

let farr = [10,20,30,45,51,60,43,89];

let ansfrr = farr.filter((number) => {
    if(number % 2 == 0)
    {
        return true;
    }
    else
    {
        return false;
    }
});

console.log(ansfrr);