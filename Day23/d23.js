// 🚀 Day 23 Challenge: Start Coding! 🚀
// Question 67: Arithmetic with Mixed Types: Write a function that takes two parameters: a number and a string that represents a number (e.g., "5"). Return their sum as a number. 
// Explain & TIP: JavaScript allows arithmetic operations between mixed types. When you add a number to a string that looks like a number, JavaScript converts the string to a number for the operation.
function num(val1, val2) {
    var valNum = Number(val2);
    return (val1 + valNum);
}
console.log(num(2, '5'));
// Question 68: Multiplying Decimals: Create a function that accepts two decimal numbers and returns their product. Round the result to two decimal places.
// Explain & TIP: When working with decimals in JavaScript, results can be unexpectedly long. Rounding can help keep numbers manageable.
function mul(val1, val2) {
    return Math.round((val1 * val2 * 100)) / 100;
}
console.log(mul(12, 2.544));
// Question 69: Dividing and Finding the Remainder: Write a function that divides two numbers and returns both the quotient and the remainder. Use an object to return both values.
// Explain & TIP: Division can give you a whole part (quotient) and a leftover part (remainder). Returning both in an object is a neat way to keep them together.
function dev(val1, val2) {
    var quotient = Math.floor((val1 / val2));
    var remainder = val1 % val2;
    return { quotient: quotient, remainder: remainder };
}
console.log(dev(12, 2.544));
