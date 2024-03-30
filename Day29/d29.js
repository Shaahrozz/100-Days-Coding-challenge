// 🚀 Day 29 Challenge: Start Coding! 🚀
// Question 85: Finding the Position of a Substring: Write a function that locates the first occurrence of the word "code" within any given string and returns its position.
// Explain & TIP: Use .indexOf() to find where a certain piece of text starts within a larger string. If the text isn't found, this method returns -1.
var ind = function (str) {
    var index = str.indexOf("code");
    return index;
};
console.log(ind("I am learning code"));
// Question 86: Checking for Text Presence: Create a function that checks if the word "JavaScript" is present in a given string. It should return true if found, otherwise false.
// Explain & TIP: The .includes() method lets you check if a string contains a certain piece of text, returning a boolean (true or false).
var message = 'i am learning JavaScript every day';
var check = function (str) { str.includes("JavaScript") ? console.log(true) : console.log(false); };
check(message);
// Question 87: Extracting a Substring: Demonstrate how to extract the first 10 characters from a string.
// Explain & TIP: .substring() can be used to get a specific part of a string, by specifying the start and end positions.
console.log(message.substring(0, 10));
