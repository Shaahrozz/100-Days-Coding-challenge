// Question 49: Function with Rest Parameters: Write a function that takes a rest parameter representing multiple hobbies. It should log each hobby with a statement saying you enjoy that hobby.

// Explain & TIP: Rest parameters allow a function to accept an indefinite number of arguments as an array, providing a way to handle multiple inputs gracefully.

function hobby(...hobbies:string[]):void {
    for (let hobby of hobbies) {
        console.log(`You enjoy ${hobby}`);
    }
}
hobby("Reading", "Playing", "Coding", "singing");

// Question 50: Multiline Template Literals: Use template literals to create a multiline string that describes your ideal day. Include at least three different activities.

// Explain & TIP: Template literals support multiline strings, making it easier to create readable text blocks that incorporate variables and expressions.

let message:string = `my day was great, I learned so much today
I am Daily Practicng TypeScript`
console.log(message);

// Question 51: Refactoring to Arrow Functions: Take a simple function that calculates the area of a rectangle and refactor it into an arrow function.

// Explain & TIP: Arrow functions provide a concise syntax for writing functions in JavaScript and TypeScript, making your code cleaner and more readable.

function calculateArea(width: number, height: number): number {
    return width * height;
}

const rectangleArea = (length:number, width:number):number => length * width;
console.log(rectangleArea(10, 5));
console.log(rectangleArea(20, 10));
