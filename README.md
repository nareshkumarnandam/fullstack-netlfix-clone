# Netflix Clone

Netflix Clone is a full-stack web application built with Node.js, Express.js, MongoDB, React.js, and Tailwind CSS. It allows users to browse, search, and discover movies using the TMDB (The Movie Database) API.

## Table of Contents

- [Project Overview](#project-overview)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Usage](#api-usage)
- [Screenshots](#screenshots)
- [Contributing](#contributing)

## Project Overview

Netflix Clone provides a user-friendly interface where users can:
- Explore popular, upcoming, and top-rated movies.
- Search for movies by title.

The application integrates with the TMDB API to fetch real-time movie data, enhancing the user experience with up-to-date information and imagery.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- React.js
- Tailwind CSS
- TMDB API (The Movie Database API)

## Features

- **Browse Movies**: Discover popular, upcoming, and top-rated movies.
- **Search Movies**: Search for movies by title.
- **Responsive Design**: Ensures seamless experience across devices using Tailwind CSS for styling.

## Installation

To run this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/nareshkumarnandam/fullstack-netlfix-clone.git
   cd movie-library-app


2. Install dependencies:
- Install server dependencies:
  ```
  npm install
  ```
- Install client dependencies:
  ```
  cd client
  npm install
  ```

3. Set up environment variables:
- Create a `.env` file in the root directory of the project.
- Define environment variables:
  ```
  PORT=5000
  TMDB_API_KEY=your_tmdb_api_key
  MONGODB_URI=your_mongodb_connection_string
  ```

4. Seed initial data (if applicable):
   ```
   npm run seed

## Usage

To start the server and client:

1. Start the server:
   ```
   npm start


2. Start the client (if separate from server):
    ```
    cd client
    npm start


3. Open your browser and navigate to `http://localhost:3000` to view the application.

## API Usage

The application interacts with the TMDB API to fetch movie data. API endpoints used include:
- `/movie/popular`: Fetches popular movies.
- `/movie/nowplaying`: Fetches now playing movies.
- `/movie/upcoming`: Fetches upcoming movies.
- `/movie/top_rated`: Fetches top-rated movies.
- `/search/movie`: Searches movies by title.

Ensure you have a valid TMDB API key and include it in your `.env` file as `TMDB_API_KEY=your_api_key`.

## Screenshots

![Screenshot 1](./src/assets/Screenshot%20(11).png)
![Screenshot 2](./src/assets/Screenshot%20(10).png)
![Screenshot 3](./src/assets/Screenshot%20(8).png)
![Screenshot 4](./src/assets/Screenshot%20(9).png)
![Screenshot 5](./src/assets/Screenshot%20(12).png)
![Screenshot 6](./src/assets/Screenshot%20(13).png)
![Screenshot 7](./src/assets/Screenshot%20(14).png)

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these guidelines:
1. Fork the repository and create a new branch.
2. Make your changes and test thoroughly.
3. Submit a pull request detailing the changes and improvements made.


# Netflix Clone Backend API
=====================================

## Project Overview

The Netflix Clone Backend API facilitates user authentication and content browsing for a movie streaming application. It handles user registration, login/sign-in, and serves content based on user sessions.

## Technologies Used

- Node.js
- Express.js
- MongoDB (or your preferred database)
- JSON Web Tokens (JWT) for authentication
- API Endpoints
- User Routes

- Register User:

- URL: POST /api/v1/user/register Description: Registers a new user in the system. Request Body:

json
```
{
  "fullName": "example",
  "email": "example@example.com",
  "password": "password"
}

- Response:

json
```
{
  "success": true,
  "message": "User registered successfully"
}

- Login User:

- URL: POST /api/v1/user/login Description: Logs in an existing user and returns a JWT token for authentication. Request Body:

json
```

{
  "email": "example@example.com",
  "password": "password"
}
- Response:

json
```

{
  "success": true,
  "token": "<jwt_token>"
}

- Browse Content:

- URL: GET /api/v1/user/browse Description: Retrieves the home page content based on the user's session (authentication required).

## Installation

1. Clone the repository:

git clone https://github.com/nareshkumarnandam/netflix-clone-backend.git
cd netflix-clone-backend

2. Install dependencies:

npm install
Set up environment variables:
Create a .env file in the root directory of the project. Define environment variables such as database connection URI, JWT secret, etc.

3. Start the server:

npm start
The API will be accessible at http://localhost:3000.

## Usage
Ensure you have MongoDB installed and running. Modify the .env file with your specific configurations before starting the server. Use tools like Postman or curl to interact with the API endpoints.

## Contributing
Contributions are welcome! If you'd like to contribute to this project, please follow these guidelines:

Fork the repository and create a new branch.
Make your changes and test thoroughly.
Submit a pull request detailing the changes and improvements made.
