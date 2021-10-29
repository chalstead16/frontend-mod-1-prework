/*
In the exercises below, write your own code where indicated
to achieve the desired result.

Two examples are already completed. Your task is to complete
any remaining prompt.

Make sure to run the file with node in your command line.
*/

//-------------------
// LEVEL 1: Loops
//-------------------

// EXAMPLE: Write code that logs to the console "I love hedgehogs!" 9 times:
for (var i = 0; i < 9; i++) {
  console.log("I love hedgehogs!");
}

// EXAMPLE: Write code that logs to the console the value of `i`, 3 times:
for (var i = 0; i < 3; i++) {
  console.log(i);
}

// What is logged to the console for this second example? Why?
// EXPLAIN:
/*The return of line 22 is 0,1,2 on the console.
This happened because the console log was commanded to print the value of the index.
The script checks the value of the index from the conditional statements in line 21.
The first statements sets a condition to initialize i (index) at 0,
the second statement sets a condition to check the variable is less than 3,
the third statement sets a condition to add 1.
As long as the second and third statement are true, the code runs printing the value each time the code is ran (each loop).
The code iterates until the conditions are false.
The return stops at the value 2 because the condition is specifically less than three,
the next iteration would equal 3 which is not less than. */


 // YOU DO: Write code below that logs to the console, the sum of 2 plus 2, 7 times:
for (var i = 0; i < 7; i++){
  console.log(4);
}

 // YOU DO: Write code below that logs the String 'She sells seashells down by the seashore'
 // 10 times.
for (var i = 0; i < 10; i++){
  console.log('She sells seashells down by the seashore');
}

//-------------------
// LEVEL 2: An Added Layer of Challenge
//-------------------

// YOU DO: Write code below that logs to the console a String of "This is loop number: "
//that concatenates with `i`.
for (var i = 0; i < 4; i++){
  console.log('This is loop number:', i);
}


// YOU DO: Using a for loop, how could you get an output that looks like this:

// 10
// 9
// 8
// 7
// 6
// 5
// 4
// 3
// 2
// 1

for (var i = 10; i >= 1; i--){
  console.log(i);
}


// Not sure? Try to google some terms that seem relevant. Play around with it. Don't spend
// more than 15 minutes without making progress. If you are at 15 minutes and haven't made
// progress, that means it's time to reach out to your pre-work group on Slack!
