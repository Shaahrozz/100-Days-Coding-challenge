// 🚀 Day 19 Challenge: Start Coding! 🚀
// Question 55: Double Numbers in an Array: Make a list of numbers. Then, use a trick to make a new list where each number is twice its original value.
// Explain & TIP: We can use a special tool to go through each number in our list and make a new list with each number doubled.
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var double = numbers.map(function (nmbr) { return nmbr * 2; });
console.log(double);
// Question 56: Keep Only Strings: Given a mix of different types of items, make a new list that has only the words.
// Explain & TIP: We can pick out just the words from a mixed bag of items, creating a list that includes only those words.
var mixedBag = ["Hello", "World", 2, "is", true, "mixed", "bag", "of", "things"];
var words = mixedBag.filter(function (item) { return typeof item === "string"; });
console.log(words);
// Question 57: Find the Average Grade: Given a list of grades, calculate the average grade.
// Explain & TIP: We can sum up all the grades and divide by the number of grades to find the average, giving us an idea of how well someone did overall.
var grades = [80, 90, 95, 100];
function averageGrade(grades) {
    var sum = 0;
    for (var _i = 0, grades_1 = grades; _i < grades_1.length; _i++) {
        var grade = grades_1[_i];
        sum += grade;
    }
    return sum / grades.length;
}
console.log(averageGrade(grades));
