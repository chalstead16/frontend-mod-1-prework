// Challenge - See if you can follow the instructions and complete the exercise in under 30 minutes!

// Declare two variables - heroName AND specialAbility - set to strings

var heroName = "Cosmic Casey";
var specialAbility = "Teleportation";


// Declare two variables - greeting AND catchphrase
//   greeting should be assigned to a string that uses concatenation to include the heroName
//   catchphrase should be assigned to a string that uses interpolation to include the specialAbility

var greeting = "Hello" + ' ' + heroName;
var catchphrase = `We don't need no man, I have ${specialAbility}!`;

// Declare two variables - power AND energy - set to integers

var power = 100;
var energy = 75;

// Declare two variables - fullPower AND fullEnergy
//   fullPower should multiply your current power by 500
//   fullEnergy should add 150 to your current energy

var fullPower = power * 500;
var fullEnergy = energy + 150;

// Declare two variables - isHuman and identityConcealed - assigned to booleans

var isHuman = true;
var identityConcealed = false;

// Declare two variables - archEnemies AND sidekicks
//   archEnemies should be an array of at least 3 different enemy strings
//   sidekicks should be an array of at least 3 different sidekick strings

var archEnemies = ["Carbs", "Alarm Clocks", "Bad vibes"];
var sidekicks = ["Zoey the Wonder Dog","Zach Attack!", "Super Friends"];

// Print the first sidekick to your console
console.log(sidekicks[0]);

// Print the last archEnemy to the console
console.log(archEnemies[2]);
// Write some code to add a new archEnemy to the archEnemies array
archEnemies.push("Killer Whales");

// Print the archEnemies array to console to ensure you added a new archEnemy
console.log(archEnemies);

// Remove the first sidekick from the sidekicks array
sidekicks.shift();

// Print the sidekicks array to console to ensure you added a new sidekick
console.log(sidekicks);

// Create a function called assessSituation that takes three arguments - dangerLevel, saveTheDay, badExcuse
//   - dangerLevel should be an integer
//   - saveTheDay should be a string a hero would say once they save the day
//   - badExcuse should be a string a hero would say if they are too afraid of the dangerLevel

function assessSituation() {
  var dangerLevel = 3;
  var saveTheDay = "Another day for the girls!";
  var badExcuse = "We don't need no man, but sometimes we want one!";
}

// Your function should include an if/else statement that meets the following criteria
//   - Danger levels that are above 50 are too scary for your hero. Any danger level that is above 50 should result in printing the badExcuse to the console
//   - Anything dangerLevel that is between 10 and 50 should result in printing the saveTheDay string to the console
//   - If the dangerLevel is below 10, it means it is not worth your time and should result in printing the string "Meh. Hard pass." to the console.

function assessSituation(dangerLevel, saveTheDay, badExcuse){
  if(dangerLevel >50){
    console.log(badExcuse);
  } else if(dangerLevel >= 10 && dangerLevel >=50){
    console.log(saveTheDay);
  } else if(dangerLevel <=9){
    console.log("Meh. Hard pass.");
  }
}

//Test Cases
var announcement = 'Never fear, the Courageous Curly Bracket is here!';
var excuse = 'I think I forgot to lock up my 1992 Toyota Coralla. Be right back.';
//assessSituation(99, announcement, excuse) > Should print - 'I think I forgot to lock up my 1992 Toyota Coralla. Be right back.'
assessSituation(99, announcement, excuse);

//assessSituation(21, announcement, excuse) > should print - 'Never fear, the Courageous Curly Bracket is here!'
assessSituation(21, announcement, excuse);

//assessSituation(3, announcement, excuse) > should print - "Meh. Hard pass."
assessSituation(3, announcement,  excuse);

// Declare a new variable - scaryMonster - assigned to an Object with the following key/values
//   - name (string)
//   - smell (string)
//   - weight (integer)
//   - citiesDestroyed (array)
//   - luckyNumbers (array)
//   - address (object with following key/values: number , street , state, zip)
var scaryMonster = {
  name:"Scary Sam",
  smell:"skunky",
  weight:1000,
  citiesDestroyed:["Los Angeles", "New York City", "Chicago"],
  luckyNumbers:[7,4,16,22],
  address: {
    number:10,
    street:"Stonewall Court",
    state:"IA",
    zip:10536
  }
};

console.log(scaryMonster);

// Create a new class called SuperHero
// - Your class should have the following DYNAMIC values
//   - name
//   - superpower
//   - age
// - Your class should have the following STATIC values
//   - archNemesis, assigned to "The Syntax Error"
//   - powerLevel = 100
//   - energyLevel = 50

class SuperHero {
  constructor(name, superpower, age) {
    this.name = name;
    this.superpower = superpower;
    this.age = age;
    this.archNemesis = "The Syntax Error";
    this.powerLevel = 100;
    this.enegeryLevel = 50;
  }
  sayName(){
    console.log(this.name);
  }
  maximizeEnergy(){
    this.energyLevel = 1000;
  }
  gainPower(){
    this.powerLevel = 100 + this.powerLevel;
  }
}

// - Create the following class methods
//   - sayName, should print the hero's name to the console
//   - maximizeEnergy, should update the energyLevel to 1000
//   - gainPower, should take an argument of a number and INCREASE the powerLevel by that number

// - Create 2 instances of your SuperHero class
var superSally = new SuperHero("Super Sally", "Super Sass", 13);

var elasticEmily = new SuperHero("Elastic Emily", "Elastic Limbs", 30);

// Reflection
// What parts were most difficult about this exerise?
//doing this exercise to time, it took me 30 minutes longer, but I think it's because I was checking to see if I had made all my pushes and didn't see this section
// What parts felt most comfortable to you?
// creating variables
// What skills do you need to continue to practice before starting Mod 1?
//creating functions, and understanding how functions, methods, and objects all work together.
