import React from "react";
// Single Responsibility Principle (SRP)
// Explanation:

// Definition: A module or class should have only one reason to change, meaning it should have only one job or responsibility.
// Example: Separating the logic for handling user details and the logic for saving user data into two distinct functions or components.
// Pros:

// Improved Maintainability: Changes to a particular functionality are isolated to a single module, making the code easier to understand and modify.
// Enhanced Readability: Each module has a clear purpose, which makes the codebase easier to read and navigate.
// Reduced Complexity: By focusing on one responsibility, each module remains simple and concise.

// Violating SRP
// const UserProfile = () => {
//   const [user, setUser] = React.useState({ name: '', email: '' });

//   React.useEffect(() => {
//     setUser({ name: 'John Doe', email: 'john.doe@example.com' });
//   }, []);

//   const saveUser = () => {
//     console.log('Saving user to the database...');
//     // logic to save user to the database
//   };

//   return (
//     <div>
//       <h1>{user.name}</h1>
//       <p>{user.email}</p>
//       <button onClick={saveUser}>Save User</button>
//     </div>
//   );
// };

// Adhering to SRP
const UserProfile = ({ user }) => (
  <div>
    <h1>{user.name}</h1>
    <p>{user.email}</p>
  </div>
);

const SaveUserButton = ({ onSave }) => (
  <button onClick={onSave}>Save User</button>
);

const UserContainer = () => {
  const [user, setUser] = React.useState({ name: "", email: "" });

  React.useEffect(() => {
    setUser({ name: "John Doe", email: "john.doe@example.com" });
  }, []);

  const saveUser = () => {
    console.log("Saving user to the database...");
    // logic to save user to the database
  };

  return (
    <div>
      <UserProfile user={user} />
      <SaveUserButton onSave={saveUser} />
    </div>
  );
};
