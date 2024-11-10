# RADGroupProject

This project is a MERN (MongoDB, Express, React, Node.js) stack application designed to manage appointments and user roles such as children, teachers, and guardians. The project is structured into two main directories: `client` and `server`.

## Client

The `client` directory contains the front-end code built with React. It includes:

- **public/**: Contains static files like `index.html`, `manifest.json`, and `robots.txt`.
- **src/**: Contains the main React application code, including components, pages, and styling.
  - **App.js**: The main application component that sets up routing for different pages like Login, Signup, Dashboard, Children, Teacher, Guardian, and Appointment.
  - **pages/**: Contains individual page components.
  - **styling/**: Contains CSS files for styling the application.

## Server

The `server` directory contains the back-end code built with Node.js and Express. It includes:

- **index.js**: The main entry point of the server application. It sets up the Express server, connects to MongoDB, and configures middleware like CORS and cookie parser.
- **Controllers/**: Contains controller files for handling requests related to appointments, authentication, children, guardians, and teachers.
- **Middleware/**: Contains middleware files like `AuthMiddleware.js` for handling authentication.
- **Models/**: Contains Mongoose models for different entities like appointments and children.
- **Routes/**: Contains route files for defining API endpoints.

## Key Features

- **User Authentication**: Managed by `AuthController.js` and `AuthMiddleware.js`.
- **Role Management**: Separate pages and routes for children, teachers, guardians, and appointments.
- **Database**: Uses MongoDB for data storage, connected via Mongoose.
- **Routing**: Client-side routing handled by React Router in `App.js`.

## Scripts

- `npm start`: Runs the React app in development mode.
- `npm test`: Launches the test runner.
- `npm run build`: Builds the React app for production.
- `npm run eject`: Ejects the Create React App configuration for customization.

## Getting Started

### Client

1. Navigate to the `client` directory.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the development server.

### Server

1. Navigate to the `server` directory.
2. Run `npm install` to install dependencies.
3. Run `node index.js` to start the Express server.

This project provides a comprehensive solution for managing appointments and user roles with a clean separation between the front-end and back-end code.
