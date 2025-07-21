// task1
function variableScopes() {
  var a = 'I am var';      
  let b = 'I am let';      
  const c = 'I am const';  

  console.log(a); 
  console.log(b);  
  console.log(c); 
}
variableScopes();
console.log("\n------------XOX--------------\n");


// 2. Array of fruits and return second fruit
console.log("------------2--------------");
const fruits = ['Apple', 'Banana', 'Cherry', 'Mango', 'Pineapple'];

function getSecondFruit() {
  return fruits[1];
}
console.log("Second fruit:", getSecondFruit());
console.log("\n------------XOX--------------\n");


// 3. Modify array with push() and pop()
console.log("------------3--------------");
function modifyArray(arr) {
  arr.push('New Element');
  arr.pop();
  return arr;
}
console.log("Modified array:", modifyArray(['A', 'B', 'C']));
console.log("\n------------XOX--------------\n");


// 4. Square numbers using map()
console.log("------------4--------------");
const numbers = [1, 2, 3, 4, 5];

function squareNumbers(arr) {
  return arr.map(num => num * num);
}
console.log("Squared numbers:", squareNumbers(numbers));
console.log("\n------------XOX--------------\n");

// 5. Filter out even numbers
console.log("------------5--------------");
function filterOddNumbers(arr) {
  return arr.filter(num => num % 2 !== 0);
}
console.log("Odd numbers:", filterOddNumbers([1, 2, 3, 4, 5, 6, 7, 8]));
console.log("\n------------XOX--------------\n");

// 6. Object and greeting function
console.log("------------6--------------");
const person = {
  name: 'Alice',
  age: 30,
  occupation: 'Engineer'
};

function greetPerson(p) {
  console.log(`Hello, my name is ${p.name}, I'm ${p.age} years old and I work as a ${p.occupation}.`);
}
greetPerson(person);
console.log("\n------------XOX--------------\n");

// 7. Calculate area of rectangle
console.log("------------7--------------");
function calculateArea(width, height) {
  return width * height;
}
console.log("Rectangle area:", calculateArea( 5, 10 ));
console.log("\n------------XOX--------------\n");


// 8. Return object keys
console.log("------------8--------------");
function getObjectKeys(obj) {
  return Object.keys(obj);
}
console.log("Object keys:", getObjectKeys({ id: 1, name: 'Item', price: 99 }));
console.log("\n------------XOX--------------\n");


// 9. Merge two objects
console.log("------------9--------------");
function mergeObjects(obj1, obj2) {
  return Object.assign({}, obj1, obj2);
}
console.log("Merged object:", mergeObjects({ a: 1 }, { b: 2 }));
console.log("\n------------XOX--------------\n");



// 10. Sum array using reduce()
console.log("------------10--------------");
function sumArray(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}
console.log("Sum of array:", sumArray([10, 20, 30, 40]));
console.log("\n------------XOX--------------\n");

