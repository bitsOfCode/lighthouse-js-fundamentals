const sayHello = function(name) {
  console.log("Hello, " + name);
}

sayHello("Caliban");
sayHello("Miranda");
sayHello("Ferdinand");

// console.log - prints immediately
const sayHelloToConsole = function(name) {
  console.log("Hello, " + name);
}
sayHelloToConsole("John");

// return - no output without further instructions
const returnSayHello = function(name) {
  return "Hello, " + name;
}

const greeting = returnSayHello("Paul");

// add output statement for returned value
console.log(greeting);