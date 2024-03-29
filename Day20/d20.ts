// Question 58: Average Score Calculator: Write a simple program that can take lots of scores and find their average.

// Explain & TIP: This program can handle any number of scores you give it, and it tells you the average score. Handy for seeing how well you did overall!

function averageScore(...scores: number[]): number {
    let total = scores.reduce((sum, score) => sum + score, 0);
    return total / scores.length;
}
console.log(averageScore(80, 90, 100, 70)); // Shows the average score



// Question 59: Add a Special Number: Make a program that creates custom adders. These adders can add a specific number to any other number you give them later.

// Explain & TIP: Imagine you have a magic box that can add a specific number to any number you put in it. This program makes that magic box for you!

function makeAdder(valueToAdd: number): (number) => number {
    // This is the magic box. It takes a number and adds your special number to it
    return function(number: number): number {
        return number + valueToAdd;
    };
}
// Making a magic box that adds 5
let addFive = makeAdder(5);
console.log(addFive(10)); 



// Question 60: Self-Running User Profile: Create a quick, self-setup profile for a user that can tell you the user's name and age.

// Explain & TIP: This is like a self-building lego set. Once you start it, it builds a user profile by itself and can tell you about the user.
let name1 = "John";
let age = 30;
console.log(`Name: ${name}, Age: ${age}`);