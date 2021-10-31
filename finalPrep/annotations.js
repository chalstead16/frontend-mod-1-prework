// Add your annotations, line by line, to the code below using code comments.
// Use the double // to create a new comment

//Build a Bear
//declaring a function with 5 parameters
function buildABear(name, age, fur, clothes, specialPower) {
//declaring a variable for a greeting, the value is a string with interppolation to include the name variable value
  var greeting = `Hey partner! My name is ${name} - will you be my friend?!`;
//declaring a variable for the demographics of the bear, using an array for the value, conatining the name and age
  var demographics = [name, age];
// declaring a variable for a powerSaying, the value is a string with concatenation of the specialPower.
  var powerSaying = "Did you know that I can " + specialPower + " ?";
// declaring an object of what the built bear qualities are to hold more key values with key value parings. The object is set to be dynamic so the values can change each time the code is ran with new values
  var builtBear = {
//the basic info of the bear is equal to the demographics value
    basicInfo: demographics,
//the clothes of the bear is dynamic key value pairing of clothes to be declared later
    clothes: clothes,
//the exterior of the bear is a dynamic key value pairing of fur to be declared later
    exterior: fur,
//the cost of the bear is a static integer value of $49.99
    cost: 49.99,
//the sayings for the bear is also static, array value of the greeting argument from above, the powersaying argument from above, and a string value.
    sayings: [greeting, powerSaying, "Goodnight my friend!"],
//the key value paring for isCUddly is boolean value of true.
    isCuddly: true,
  };

//stops the execution of the buildABear function
  return builtBear
}
//Declaring values for the parameters: name, age, clothes, and special power
buildABear('Fluffy', 4, 'brown', ['pants', 'jorts', 'tanktop'], 'give you nightmares');
//Declaring values for the parameters: name, age, clothes, and special power
buildABear('Sleepy', 2, 'purple', ['pajamas', 'sleeping cap'], 'sleeping in');



//FizzBuzz
//declaring a function with three parameters
function fizzBuzz(num1, num2, range) {
//declaring a loop of how many times to run the code block
  for (var i = 0; i <= range; i++) {
//declaring an if statement to create paths for the script the follow
    if (i % num1 === 0 && i % num2 === 0) {
//if the condition in line 45 returns true, the console will print the string value in line 47
      console.log('fizzbuzz');
//declaring an else if statement for the script to follow  if condintion in line 45 returns false
    } else if (i % num1 === 0) {
//if the condition in line 49 returns true, the console will return the string value in line 51
      console.log('fizz');
//declaring an else if statemtn for the script to follow if the condition in line 45 and 49 return false.
    } else if (i % num2 === 0) {
//if the condition in line 53 returns true, the console will return the string value in line 55
      console.log('buzz');
//declaring and else statement for the script to follow if the conditions in lines 45, 49, and 53 all return false.
    } else {
//if the condition in line 57 reutns true, the console will return the iteration count
      console.log(i);
    }
  }
}

//declaring arguments for the parameters in the fizzBuzz function
fizzBuzz(3, 5, 100);
//declaring arguments for the parameters in the fizzBuzz function
fizzbuzz(5, 8, 400);
