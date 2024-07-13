import React from "react";
// Dependency Inversion Principle (DIP)
// Explanation:

// Definition: High-level modules should not depend on low-level modules. Both should depend on abstractions. Abstractions should not depend on details. Details should depend on abstractions.
// Example: Using dependency injection to pass a notification service to a component rather than the component creating and depending on a specific implementation.
// Pros:

// Increases Decoupling: High-level modules are independent of the details of low-level modules, making the system more modular.
// Improves Testability: Decoupled modules are easier to test in isolation since dependencies can be easily mocked or stubbed.
// Enhances Flexibility: Allows for easier swapping of implementations without affecting the high-level logic.

// Voilating DIP
// Low-level module: EmailNotification
// const sendEmail = (message: string) => {
//   console.log(`Sending email: ${message}`);
// };

// // High-level module: NotificationService
// const notifyUser = (message: string) => {
//   sendEmail(message);  // Directly depends on sendEmail
// };

// notifyUser('Hello, this is a notification!');  // Output: Sending email: Hello, this is a notification!

// Abstraction: Notifier
interface Notifier {
  notify: (message: string) => void;
}

// Low-level module: EmailNotification
const emailNotifier: Notifier = {
  notify: (message: string) => {
    console.log(`Sending email: ${message}`);
  },
};

// Low-level module: SMSNotification
const smsNotifier: Notifier = {
  notify: (message: string) => {
    console.log(`Sending SMS: ${message}`);
  },
};

// High-level module: NotificationService
const notifyUser = (notifier: Notifier, message: string) => {
  notifier.notify(message); // Depends on Notifier abstraction
};

// Now we can notify via email
notifyUser(emailNotifier, "Hello, this is a notification!"); // Output: Sending email: Hello, this is a notification!

// Or via SMS
notifyUser(smsNotifier, "Hello, this is a notification!"); // Output: Sending SMS: Hello, this is a notification!
