# User Form Application

This repository contains the source code for the User Form application, which consists of both frontend and backend components.

## Overview

The User Form application is designed to provide a user registration and login system. It allows users to sign up with their information and subsequently log in to access the application's features. The backend is powered by JSON Server, providing a RESTful API for user management, while the frontend is built using Angular.

## Features

- User registration with validation
- User login with authentication
- Seamless integration between frontend and backend
- JSON Server backend for storing user data
- Angular frontend for user interaction

## frontend folder Structure
- The frontend app is structured as follows: 

user_form/
│
├── frontend-app/ // Angular frontend application
│ ├── src/ // Source code
│ │ ├── app/ // Angular components, services, etc.
│ │ ├── assets/ // Static assets like images, fonts, etc.
│ │ ├── environments/ // Environment-specific configuration files
│ │ ├── ...
│ │ └── index.html // Entry HTML file for Angular app
│ ├── angular.json // Angular project configuration
│ ├── package.json // Frontend dependencies and scripts
│ └── ...
│
└── ...


- The backend app is structured as follows:

user_form/
│
├── backend-app/ // JSON Server backend
│ ├── db.json // JSON file containing database data
│ ├── node_modules/ // Node.js modules (automatically generated)
│ ├── package.json // Backend dependencies and scripts
│ ├── server.js // Entry point for JSON Server
│ └── ...
│
└── ...

## Additional Information
- For more information about Angular, refer to the [Angular documentation](https://angular.io/docs).
- For more information about JSON Server, refer to the [JSON Server documentation](https://github.com/typicode/json-server).

## Installation

To run the User Form application locally, follow these steps:

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/your-username/user-form.git

   => Navigate to the project directory:
       cd user-form

   => Install dependencies for both frontend and backend:
       cd frontend-app
       npm install
       cd ../backend-app
       npm install

    => To start the backend server powered by JSON Server:
       cd backend-app
       json-server --watch <file name>

    => To start the frontend Angular application:
       cd frontend-app
       npm run start



