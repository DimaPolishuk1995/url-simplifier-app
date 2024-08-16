# URL Simplifier App

## Overview

The URL Simplifier App is a full-stack application designed to shorten URLs. The app is built using modern web technologies and is structured into a frontend and backend. The frontend is hosted on Vercel, while the backend is hosted on Heroku. MongoDB is used as the database to store the URL mappings.

- **Frontend**: [https://url-simplifier-app.vercel.app/](https://url-simplifier-app.vercel.app/)
- **Backend**: [https://url-simplifier-app-backend-915c14c8027d.herokuapp.com/api](https://url-simplifier-app-backend-915c14c8027d.herokuapp.com/api)
- **Database**: MongoDB

## Table of Contents

- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Running the Application](#running-the-application)
    - [Using Docker Compose](#using-docker-compose)
    - [Running Locally](#running-locally)
- [Environment Variables](#environment-variables)

## Technologies Used

### Frontend

- **Next.js**: A React framework for production.
- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A typed superset of JavaScript.
- **Tailwind CSS**: A utility-first CSS framework.
- **Material-UI**: React components for faster and easier web development.
- **React Hook Form**: A library for managing form state in React.
- **React Query**: A library for fetching, caching, and updating asynchronous data in React.
- **Zod**: A TypeScript-first schema declaration and validation library.

### Backend

- **NestJS**: A progressive Node.js framework for building efficient and scalable server-side applications.
- **MongoDB**: A NoSQL database used for storing URL mappings.
- **Mongoose**: An elegant MongoDB object modeling for Node.js.
- **Swagger**: Used for API documentation and testing.
- **Jest**: A delightful JavaScript testing framework with a focus on simplicity.
- **TypeScript**: Used for static typing in JavaScript.

## Project Structure

The project is organized as follows:

```
.
├── LICENSE
├── Procfile
├── apps
│   ├── backend
│   │   ├── Dockerfile
│   │   ├── README.md
│   │   ├── dist
│   │   ├── nest-cli.json
│   │   ├── node_modules
│   │   ├── package-lock.json
│   │   ├── package.json
│   │   ├── src
│   │   ├── test
│   │   ├── tsconfig.build.json
│   │   └── tsconfig.json
│   └── frontend
│       ├── Dockerfile
│       ├── README.md
│       ├── next-env.d.ts
│       ├── next.config.mjs
│       ├── node_modules
│       ├── package-lock.json
│       ├── package.json
│       ├── postcss.config.mjs
│       ├── public
│       ├── src
│       ├── tailwind.config.ts
│       └── tsconfig.json
├── docker-compose.yml
└── package.json
```

## Running the Application

### Using Docker Compose

To run the entire application using Docker Compose, you can use the following steps:

1. Ensure you have Docker and Docker Compose installed on your system.
2. Navigate to the root directory of the project.
3. Run the following command to build and start the services:

   ```bash
   docker-compose up --build
   ```

   This will start the backend, frontend, and MongoDB services. The backend will be available at `http://localhost:4000`, and the frontend will be available at `http://localhost:3000`.

### Running Locally

You can also run the frontend and backend separately using npm:

1. **Frontend**:
    - Navigate to the `apps/frontend` directory.
    - Run `npm install` to install the dependencies.
    - Run `npm run dev` to start the frontend in development mode.

2. **Backend**:
    - Navigate to the `apps/backend` directory.
    - Run `npm install` to install the dependencies.
    - Run `npm run start:dev` to start the backend in development mode.

## Environment Variables

The application relies on several environment variables to function correctly. These variables should be set in the respective environments (Docker, Vercel, Heroku).

### Required Environment Variables

- `NODE_ENV`: Set to `docker` when using Docker.
- `MONGO_URI`: The connection string for MongoDB.
    - Example: `mongodb://mongodb:27017/urlsimplifier` for Docker.
    - Example: Your MongoDB Atlas URI for Heroku.
- `API_BASE_URL`: The base URL for the backend API.
    - Example: `http://backend:4000` for Docker.
    - Example: `https://url-simplifier-app-backend-915c14c8027d.herokuapp.com` for Vercel.

## Conclusion

This project demonstrates how to build and deploy a full-stack application using modern web technologies. The frontend and backend are decoupled, allowing for independent scaling and deployment. MongoDB is used for persistence, and the project is containerized using Docker for easy development and deployment.