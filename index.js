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