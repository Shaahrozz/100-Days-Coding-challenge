// Question 61: Making Enums for Vehicles: Let's create categories for vehicles like cars, trucks, and motorcycles using enums, and show one example.

// Explain & TIP: Enums are like special lists in your code that help you categorize things. They make your code cleaner and easier to understand.

enum Vehicles{
    Cars,
    Trucks,
    MotorBikes,
}
console.log(Vehicles.Cars)

// Question 62: Making a Student Template: Create a blueprint for student information, including their name, age, and the classes they're taking, and then fill in this blueprint with an example student.

// Explain & TIP: This blueprint, called an interface, helps ensure all students have the same kind of information, making your code more organized.

interface student{
    name:string,
    age:number,
    classes:string[]
}
let student1:student={
    name:"John",        
    age:20,
    classes:["physics", "maths","english"]

}
console.log(student1)

// Question 63: Shape Shifter: Write a program that can describe either a circle or a rectangle using a special type alias, including properties unique to each shape.

// Explain & TIP: A type alias lets you create a custom type. It's like a shortcut for describing more complex information, such as the details of different shapes.
type Shape= {
    kind: "circle" | 'rectangle';
    radius?: number,
    height?: number,
    width?: number,
}
let cicle:Shape={
    kind: "circle",
    radius: 34
}
console.log(cicle)
