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

## Development for frontend-side

To run the frontend app locally, follow these steps:

1. Navigate to the `frontend-app` directory.
2. Install dependencies using `npm install`.
3. Start the development server using `npm run start`.
4. Open a web browser and navigate to `http://localhost:4200/` to view the app.

## Deployment for frontend-side

To deploy the frontend app, follow these steps:

1. Build the app using `ng build`.
2. Deploy the generated `dist` directory to your hosting provider.

## Development for Backend-side

To run the backend app locally, follow these steps:

1. Navigate to the `backend-app` directory.
2. Install dependencies using `npm install`.
3. Start the JSON Server using `json-server --watch <file name>`.
4. The server will be accessible at `http://localhost:3000/`.

## Deployment for Backend-side

To deploy the backend app, follow these steps:

1. Deploy the entire `backend-app` directory to your hosting provider.
2. Ensure that the `db.json` file is included and accessible to the server.


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

