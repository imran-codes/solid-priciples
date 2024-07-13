import React from "react";

// Violating ISP
// interface UserProfileProps {
//   name: string;
//   email: string;
//   onSave: () => void;
//   onDelete: () => void;
// }

// const UserProfile = ({ name, email, onSave, onDelete }: UserProfileProps) => (
//   <div>
//     <h1>{name}</h1>
//     <p>{email}</p>
//     <button onClick={onSave}>Save</button>
//     <button onClick={onDelete}>Delete</button>
//   </div>
// );

// Adhering to ISP
interface UserProfileProps {
  name: string;
  email: string;
}

interface UserActionsProps {
  onSave: () => void;
  onDelete: () => void;
  handleUpdate: () => void;
}

const UserProfile = ({ name, email }: UserProfileProps) => (
  <div>
    <h1>{name}</h1>
    <p>{email}</p>
  </div>
);

const UserActions = ({ onSave, onDelete, handleUpdate }: UserActionsProps) => (
  <div>
    <button onClick={onSave}>Save</button>
    <button onClick={onDelete}>Delete</button>
  </div>
);

const UserContainer = () => {
  const handleSave = () => console.log("Save");
  const handleDelete = () => console.log("Delete");
  const handleUpdate = () => console.log("Update");

  return (
    <div>
      <UserProfile name="John Doe" email="john.doe@example.com" />
      <UserActions
        onSave={handleSave}
        onDelete={handleDelete}
        handleUpdate={handleUpdate}
      />
    </div>
  );
};
