// Open /closed principle

// Open for extension, closed for modification

// Pros:

// Easier to Extend: New functionality can be added without modifying existing code, reducing the risk of introducing bugs.
// Promotes Reusability: Well-defined extensions make components or functions reusable in different contexts.
// Encourages Modularity: Keeps the core functionality stable and encapsulated, promoting a modular design.

// Violating OCP
// const calculateArea = (shape) => {
//   if (shape.type === "rectangle") {
//     return shape.width * shape.height;
//   } else if (shape.type === "circle") {
//     return Math.PI * Math.pow(shape.radius, 2);
//   } else if (shape.type === "triangle") {
//     return (shape.base * shape.height) / 2;
//   }
//   return 0;
// };

// Adhering to OCP
const calculateRectangleArea = (rectangle) => rectangle.width * rectangle.height;
const calculateCircleArea = (circle) => Math.PI * Math.pow(circle.radius, 2);
const calculateTriangleArea = (triangle) => (triangle.base * triangle.height) / 2;

const shapes = {
  rectangle: calculateRectangleArea,
  circle: calculateCircleArea,
  triangle: calculateTriangleArea
};

const calculateArea = (shape) => shapes[shape.type](shape);

calculateArea({ type: "rectangle", width: 10, height: 20 }); // 200
calculateArea({ type: "circle", radius: 10 }); // 314.1592653589793
calculateArea({ type: "triangle", base: 10, height: 20 }); // 100