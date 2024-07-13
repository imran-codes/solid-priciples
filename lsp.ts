// Liskov Substitution Principle (LSP)
// Explanation:

// Definition: Objects or modules should be replaceable with instances of their subtypes without affecting the correctness of the program.
// Example: Ensuring that functions designed to work with a type (e.g., Bird) can also work with any subtype (e.g., FlyingBird and Ostrich) without causing errors.

// Pros:

// Improved Reliability: Guarantees that subclasses or specific implementations can be used interchangeably without unexpected behavior.
// Facilitates Polymorphism: Encourages the use of polymorphic behavior in a safe and predictable manner.
// Enhances Flexibility: Code that adheres to LSP can be more flexible and easier to refactor or extend.

// Violating LSP
// const birdActions = (bird) => {
//   if (bird.type === "flying") {
//     return "Flying";
//   } else if (bird.type === "ostrich") {
//     throw new Error("Ostriches cannot fly");
//   }
// };

// Adhering to LSP
const flyingBirdActions = () => "Flying";
const ostrichActions = () => "Running";

const birds = {
  flying: flyingBirdActions,
  ostrich: ostrichActions,
};

const birdActions = (bird) => birds[bird.type]();

const flyingBird = { type: "flying" };
const runningBird = { type: "ostrich" };

console.log(birdActions(flyingBird)); // Output: Flying
console.log(birdActions(runningBird)); // Output: Running
