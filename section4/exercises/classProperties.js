/*
In the exercise below, write your own code where indicated
to achieve the desired result.

Make sure to run the file with node in your command line.
*/

//-------------------
// Part 1: Syntax and Naming Conventions
//-------------------

// For each prompt:
  // Write a class skeleton
  // Create 2 object instances and store in variables
  // Log each variable to the console.
  // You do not need any proerties at this time!!

// Prompt 1: Dog
class Dog {

}
var yorkie = new Dog();
console.log(yorkie);
var poodle = new Dog();
console.log(poodle);

// Prompt 2: Snack
class Snack {

}
var chip = new Snack();
console.log(chip);
var cookie = new Snack();
console.log(cookie);

// Prompt 3: Shirt
class Shirt {

}
var tankTop = new Shirt();
console.log(tankTop);
var longSleeve = new Shirt();
console.log(longSleeve);

//-------------------
// Part 2: Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Assign 3 properties (names and values of your choice) to each class
  // Create an object instance and store in variable
  // Log that variable to the console.

// Prompt 1: Dog
class Dog2 {
  constructor() {
    this.color = "Black and White";
    this.age = "Puppy";
    this.earType = "Floppy";
  }
}
var oldEnglishSheepdog = new Dog2();
console.log(oldEnglishSheepdog);

// Prompt 2: Snack
class Snack2 {
  constructor() {
    this.brand = "Ritz";
    this.amount = 10;
    this.cost = "$5.00";
  }
}
var cracker = new Snack2();
console.log(cracker);

// Prompt 3: Shirt
class Shirt2 {
  constructor() {
    this.material = "Cotton";
    this.color = "Pink";
    this.brand = "GAP";
  }
}
var teeShirt = new Shirt2();
console.log(teeShirt);

//-------------------
// Part 3: Dynamic Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Declare 3 parameters in the consutructor
  // Assign 3 properties (names and values of your choice), using the parameters
  // Create 2 object instances and store in variables (passing in different arguments)
  // Log those variables to the console.

// Prompt 1: Dog
class Dog3 {
  constructor(coatColor, lifeStage, ears) {
    this.color = coatColor;
    this.age = lifeStage;
    this.earType = ears;
  }
}
var dolmation = new Dog3("Spotted - White and Black", "Puppy", "Floppy");
console.log(dolmation);

var goldenDoodle = new Dog3("Blonde", "Adult", "Floppy");
console.log(goldenDoodle);

// Prompt 2: Snack
class Snack3 {
  constructor(maker, totalAmount, pricePerUnit) {
    this.brand = maker;
    this.amount = totalAmount;
    this.cost = pricePerUnit;
  }
}
var hummus = new Snack3("Sabra", 1, "$3.75");
console.log(hummus);

var blueberry = new Snack3("Driscols Berries", 30, "$3.95");
console.log(blueberry);

// Prompt 3: Shirt
class Shirt3 {
  constructor(fabric, clr, designer) {
    this.material = fabric;
    this.color = clr;
    this.brand = designer;
  }
}
var sweater = new Shirt3("Wool", "Blue", "Lucky Brand");
console.log(sweater);

var turtleNeck = new Shirt3("Cotton", "Green", "Levi's");
console.log(turtleNeck);
