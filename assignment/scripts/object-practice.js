console.log("***** Object Practice *****");

// Add the required code to complete the tasks below
/* 1. Create an object literal to represent you!
  - Give the object a 'firstName & (separate) 'lastName' property
  - Give it a boolean 'hasSiblings' property
  - Give it  a numeric 'shoeCount' property
  - Also give it an array 'favThreeFoods'
*/
const me = {
  // TODO - add properties here
  firstName: "Hamza",
  lastName: "Mohamed",
  hasSiblings: true,
  shoeCount: 8,
  favThreeFood: ["Steak", "Pasta", "Salad"],
};
console.log("A little about me:", me);

/* 2. Accessing object properties.
  - Create a variable called fullName 
  - Use the firstName & lastName properties of the object you 
    created above to set its value. 
  - Console.log fullName
*/

//creating a new variable named fullName and set it equal to object.firstName and object.lastName
const fullName = `${me.firstName} ${me.lastName}`;

//Console.log fullName
console.log(fullName);

/* 3. Nested arrays
  - Console.log your first favorite food
  - Console.log your last favorite food 
*/

//My first favorite food
console.log("My first favorite food is:", me.favThreeFood[0]);

//My last favorite food
console.log("My last favorite food is:", me.favThreeFood[2]);

/* 4. Change a property of an existing object.
  - Console.log your current shoe count.
  - Guess what?! You just got a new pair of shoes!!!
  - Set your object's shoeCount to be what it was plus 1
  - Console.log your updated shoe count. 
*/
// log your current shoe count
console.log("My current shoe count is:", me.shoeCount);

//setting/accessing the shoeCount and adding 1 new pair of shoes to the original count
me.shoeCount = me.shoeCount + 1;

//Updated shoe count and login the result to the console
console.log(
  "My current shoe count plus the new pair i just got:",
  me.shoeCount
);

/* 5. Add a new property to an existing object.
  - Add a 'favoriteColor' to your existing object
  - Do this the same way you updated the variable above
  - Cool huh? It works, even though it wasn't there before
  - Console.log your object
*/

//adding favorite color to my object.
me.favoriteColor = "Brown";

//- Console.log your object
console.log(me); //
