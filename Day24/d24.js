// Question 70: Understanding let in Loops: Write a function that uses a loop with the let keyword to print numbers from 1 to 5. Explain how the let keyword affects the visibility of the loop variable.
// Explain & TIP: The let keyword provides block scope in JavaScript, which means variables declared with let inside a loop are only accessible within that loop. This helps avoid unintended interference with other parts of your code.
function loop() {
    for (var i = 1; i <= 5; i++) {
        console.log(i);
    }
}
loop();
// Question 71: Compare let and const: Create two examples where let allows reassignment but const does not. Try to reassign a const-declared variable and catch the error.
// Explain & TIP: let allows you to declare variables that can be reassigned, while const is for variables that should not change once set. Using const helps make your code safer and more predictable.
var a = 12;
a = 6;
console.log(a);
var b = 6;
// b=3
console.log(b);
// Question 72: Block Scope with let and const: Demonstrate block scope by creating a code block with {} that uses both let and const. Show how variables declared inside the block are not accessible outside of it.
// Explain & TIP: Block scope, created by {} in JavaScript, confines let and const variables to that block, enhancing code organization and preventing accidental access from outside the block.
{
    var a_1 = 0;
    var b_1 = 1;
    console.log(a_1);
    console.log(b_1);
}
try {
    console.log(a);
}
catch (error) {
    console.log("the variable is not assessible outside block scope");
}
try {
    console.log(b);
}
catch (error) {
    console.log("the variable is not assessible outside block scope");
}
