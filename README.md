# PhotoLabs Application

PhotoLabs is a photography management platform built using React for the frontend and a Node.js/Express backend. The application allows users to explore and manage photos, view details, mark favorites, and explore various photography topics.

## Table of Contents
- [Overview](#overview)
- [Frontend](#frontend)
- [Backend](#backend)
- [Getting Started](#getting-started)
- [Dependencies](#dependencies)
- [Usage](#usage)
- [Features](#features)
- [Screenshots](#screenshots)
- [License](#license)

## Overview

The PhotoLabs application is designed to help users explore and manage a wide range of photos. It provides an interactive user interface that makes it easy to view photos, mark favorites, and learn about different photography topics. The application is separated into frontend and backend components.

### Getting Started

1. Clone the repository to your local machine.
2. Create an .env file and copy paste the following values: 
  - REACT_APP_PHOTOS_URL=/api/photos
  - REACT_APP_TOPICS_URL=/api/topics

## Frontend

The frontend component of the PhotoLabs application is built using React, a popular JavaScript library for building user interfaces. It provides a user-friendly experience for exploring and interacting with photos.

To get started with the PhotoLabs frontend application, follow these steps:

1. Install the required dependencies using `npm install`.
2. Start the development server using `npm start`.
3. Open the application in your web browser at `http://localhost:3000`.

### Dependencies

The frontend application relies on the following dependencies:

- `react`: The core library for building user interfaces in React.
- `react-dom`: Provides methods for working with the DOM (Document Object Model) in React applications.
- `react-scripts`: Contains scripts and configuration for building and running the React application.
- `web-vitals`: A library for measuring web performance.
- `sass`: A CSS preprocessor used for styling.

## Backend

The backend component of the PhotoLabs application is built using Node.js and Express, providing the necessary API endpoints for the frontend application to interact with.

To get started with the PhotoLabs backend server, follow these steps:

1. Install the required dependencies using `npm install`.
2. Start the server using `npm start`.
3. The server will be available at the specified port (default: `http://localhost:8001`).

### Dependencies

The backend server relies on the following dependencies:

- `body-parser`: Middleware for parsing incoming request bodies.
- `cors`: Middleware for enabling Cross-Origin Resource Sharing.
- `dotenv`: Loading environment variables from a `.env` file.
- `express`: A web application framework for Node.js.
- `helmet`: Middleware for securing HTTP headers.
- `pg`: A PostgreSQL client for Node.js.
- `socket.io`: A library for adding real-time features to applications.
- `ws`: A simple WebSocket implementation.

## Features

The PhotoLabs application provides a range of features, including:

- Viewing a list of photos.
- Marking photos as favorites.
- Exploring various photography topics.
- Viewing detailed information about individual photos.
- Real-time updates for new photos.

## Screenshots

!["Screenshot of home screen"](https://github.com/BSMuse/photolabs-starter/blob/main/docs/photolabs_home.png?raw=true)
!["Screenshot of modal](https://github.com/BSMuse/photolabs-starter/blob/main/docs/photolabs_modal.png?raw=true)
!["Screenshot of category switch"](https://github.com/BSMuse/photolabs-starter/blob/main/docs/photolabs_animals.png?raw=true)
!["Screenshot of category switch"](https://github.com/BSMuse/photolabs-starter/blob/main/docs/photolabs_nature.png?raw=true)

## License

This project is licensed under the ISC License.
