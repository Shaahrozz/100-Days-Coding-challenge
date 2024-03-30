// Question 61: Making Enums for Vehicles: Let's create categories for vehicles like cars, trucks, and motorcycles using enums, and show one example.
// Explain & TIP: Enums are like special lists in your code that help you categorize things. They make your code cleaner and easier to understand.
var Vehicles;
(function (Vehicles) {
    Vehicles[Vehicles["Cars"] = 0] = "Cars";
    Vehicles[Vehicles["Trucks"] = 1] = "Trucks";
    Vehicles[Vehicles["MotorBikes"] = 2] = "MotorBikes";
})(Vehicles || (Vehicles = {}));
console.log(Vehicles.Cars);
var student1 = {
    name: "John",
    age: 20,
    classes: ["physics", "maths", "english"]
};
console.log(student1);
var cicle = {
    kind: "circle",
    radius: 34
};
console.log(cicle);
