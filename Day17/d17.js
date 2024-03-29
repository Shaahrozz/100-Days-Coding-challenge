// Question 49: Function with Rest Parameters: Write a function that takes a rest parameter representing multiple hobbies. It should log each hobby with a statement saying you enjoy that hobby.
// Explain & TIP: Rest parameters allow a function to accept an indefinite number of arguments as an array, providing a way to handle multiple inputs gracefully.
function hobby() {
    var hobbies = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        hobbies[_i] = arguments[_i];
    }
    for (var _a = 0, hobbies_1 = hobbies; _a < hobbies_1.length; _a++) {
        var hobby_1 = hobbies_1[_a];
        console.log("You enjoy ".concat(hobby_1));
    }
}
hobby("Reading", "Playing", "Coding", "singing");
// Question 50: Multiline Template Literals: Use template literals to create a multiline string that describes your ideal day. Include at least three different activities.
// Explain & TIP: Template literals support multiline strings, making it easier to create readable text blocks that incorporate variables and expressions.
var message = "my day was great, I learned so much today\nI am Daily Practicng TypeScript";
console.log(message);
