// Interface Segregation Principle (ISP)
// Explanation:

// Definition: Clients should not be forced to depend on interfaces they do not use. Create specific interfaces for different functionalities.
// Example: Splitting a large interface with many methods into smaller, more specific interfaces that clients can implement as needed.
// Pros:

// Reduces Unnecessary Dependencies: Clients only depend on the interfaces they actually use, leading to a more decoupled and modular design.
// Improves Clarity: Smaller, specific interfaces are easier to understand and implement.
// Enhances Maintainability: Changes to one part of the interface do not affect clients that do not depend on that part.

// Violating ISP
// interface Worker {
//     work: () => void;
//     eat: () => void;
//   }

//   const humanWorker = {
//     work: () => console.log('Working'),
//     eat: () => console.log('Eating'),
//   };

//   const robotWorker = {
//     work: () => console.log('Working'),
//     eat: () => {
//       throw new Error('Robots do not eat');
//     },
//   };

// Adhering to ISP
interface Workable {
  work: () => void;
}

interface Eatable {
  eat: () => void;
}

interface Sleepable {
  sleep: () => void;
}

interface HumanWorker {
  work: () => void;
  eat: () => void;
  sleep: () => void;
}

const humanWorker: HumanWorker = {
  work: () => console.log("Working"),
  eat: () => console.log("Eating"),
  sleep: () => console.log("Sleeping"),
};

const robotWorker: Workable = {
  work: () => console.log("Working"),
};

humanWorker.work(); // Working
humanWorker.eat(); // Eating
robotWorker.work(); // Working
robotWorker.eat(); // Error: robotWorker.eat is not a function
