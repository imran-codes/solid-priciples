import React from "react";

// Violating LSP
// const BirdComponent = ({ bird }) => {
//     try {
//       bird.fly();
//       return <div>The bird is flying.</div>;
//     } catch (error) {
//       return <div>{error.message}</div>;
//     }
//   };

// Adhering to LSP
const BirdComponent = ({ bird }) => {
  return (
    <div>
      The {bird.name()} bird is {bird.move()}. The {bird.name()} bird eats{" "}
      {bird.eats()}.
    </div>
  );
};

const App = () => {
  const flyingBird = { move: () => "Flying", eats: () => "Seeds", name: () => "Flying"};
  const ostrich = { move: () => "Running", eats: () => "Insects", name: () => "Ostrich"};

  return (
    <div>
      <BirdComponent bird={flyingBird} />
      <BirdComponent bird={ostrich} />
    </div>
  );
};

<App />;
// Output:
// The Flying bird is Flying. The Flying bird eats Seeds.
// The Ostrich bird is Running. The Ostrich bird eats Insects.
