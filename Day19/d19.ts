// 🚀 Day 19 Challenge: Start Coding! 🚀

// Question 55: Double Numbers in an Array: Make a list of numbers. Then, use a trick to make a new list where each number is twice its original value.

// Explain & TIP: We can use a special tool to go through each number in our list and make a new list with each number doubled.

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let double = numbers.map(nmbr => nmbr*2)
console.log(double)

// Question 56: Keep Only Strings: Given a mix of different types of items, make a new list that has only the words.

// Explain & TIP: We can pick out just the words from a mixed bag of items, creating a list that includes only those words.

let mixedBag = ["Hello", "World", 2, "is", true, "mixed", "bag", "of", "things"];
let words = mixedBag.filter(item => typeof item === "string");
console.log(words);

// Question 57: Find the Average Grade: Given a list of grades, calculate the average grade.

// Explain & TIP: We can sum up all the grades and divide by the number of grades to find the average, giving us an idea of how well someone did overall.

let grades = [80, 90, 95, 100];
function averageGrade(grades: number[]) {
    let sum = 0;
    for (let grade of grades) {
        sum += grade;
    }
    return sum / grades.length;
}
console.log('Average: ',averageGrade(grades));
