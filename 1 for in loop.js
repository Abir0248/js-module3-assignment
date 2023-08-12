function printObjectProperties(obj) {
  if (Object.keys(obj).length === 0) {
    console.log("Object is empty");
  } else {
    for (let property in obj) {
      console.log(`${property}: ${obj[property]}`);
    }
  }
}
const person = {
  name: "John",
  age: 30,
  occupation: "Engineer",
};

const emptyObject = {};

printObjectProperties(person);
printObjectProperties(emptyObject);

/*1) javascript For in loop


Write a JavaScript function named printObjectProperties that takes an object as an argument and uses the for...in loop to print all the properties and their values in the following format: "property: value". If the object is empty, print "Object is empty".
*/
