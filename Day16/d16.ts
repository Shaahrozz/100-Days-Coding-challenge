// 🚀 Day 16 Challenge: Start Coding! 🚀

// Question 46: Enhanced Laptop Object: Construct an object for a laptop including properties make, model, year, and a method describe() that logs a sentence about the laptop.

// Explain & TIP: Objects can also contain functions (methods) that can perform actions using the object's properties. This introduces method definition within objects.

// Answer: Please try to do it yourself first!

let laptop = {
  make: "HP",
  model: "Envy",
  year: 2022,
  describe: function () {
    console.log(`This is a ${this.make} ${this.model} from ${this.year}.`);
  },
}
laptop.describe();

// Question 47: Advanced Array Destructuring: Given an array of objects representing different laptops, each with properties make, model, and year, use array destructuring to assign the first and second laptops to variables. Then, log these variables.

// Explain & TIP: Destructuring can also be used to quickly extract elements from arrays of objects, simplifying access to complex data structures.

let laptops = [
  { make: "HP", model: "Envy", year: 2022 },
  { make: "DELL", model: "latitude", year: 2021 },
  { make: "lenovo", model: "xpress", year: 2020 },
]
let [first, second] = laptops;
console.log(first); 
console.log(second);

// Question 48: Combining Arrays with Spread Operator: Suppose you're comparing prices of two different sets of laptops. Use the spread operator to combine these arrays into a single array sorted in ascending order, then log the result.

// Explain & TIP: The spread operator can be used in conjunction with array methods like sort() to combine and manipulate arrays efficiently.

let laptops1 = [
    { make: "HP", model: "Envy", year: 2022 },
    { make: "DELL", model: "latitude", year: 2021 },
    { make: "lenovo", model: "xpress", year: 2020 },
  ]

let laptops2 = [
    { make: "HP", model: "Victus", year: 2016 },
    { make: "DELL", model: "Inspiron", year: 2019 },
    { make: "lenovo", model: "X260", year: 2015 },
]

let combined = [...laptops1, ...laptops2];
combined.sort((a, b) => a.year - b.year);
console.log(combined);
