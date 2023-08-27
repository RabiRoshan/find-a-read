# Book Search App

This is a simple book search application that allows users to search for their favorite books. The data is powered by the Google Books API. The frontend of the application is built using Next.js, a powerful React framework, and the backend is built using FastAPI, a modern, fast (high-performance), web framework for building APIs with Python 3.6+.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Running the App](#running-the-app)
- [Development Progress](#development-progress)
- [Deployment Details](#deployment-details)
- [Demo](#demo)

## Features

- Search for books.
- View book details. (Redirect to preview url from the Google Books API)
- Powered by Google Books API.
- Next.js on the frontend.
- FastAPI on the backend.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js and npm ([download here](https://nodejs.org/en/download/))
- Python 3.6+ ([download here](https://www.python.org/downloads/))
- Python venv ([installation guide](https://docs.python.org/3/library/venv.html))

## Installation

1. Clone the repository:

   ```
   git clone https://github.com/RabiRoshan/find-a-read.git
   ```

2. Navigate into the cloned repository:

   ```
   cd find-a-read
   ```

3. Install the frontend dependencies:

   ```
   cd frontend
   npm install
   ```

4. Setup and activate the Python virtual environment:

   ```
   cd ../backend
   python3 -m venv env
   source env/bin/activate
   ```

5. Install the backend dependencies:
   ```
   pip install -r requirements.txt
   ```

## Running the App

1. Start the frontend server:

   ```
   cd frontend
   npm run dev
   ```

2. In a new terminal, start the backend server:
   ```
   cd backend
   source env/bin/activate
   uvicorn main:app --port 5000 --reload
   ```

Now, the frontend server should be running at `http://localhost:3000` and the backend at `http://localhost:5000`.

## Development Progress

- [x] Setup frontend with Next.js
- [x] Setup backend with FastAPI
- [x] Connect to Google Books API
- [x] Implement book search feature
- [x] Utilize query params in the frontend app as well
- [x] Make the app responsive accross all the size(s)
- [x] Implement Infinite scroll load feature with Loading Card Skeleton (Advanced Styling)
- [x] Show loading indicator when search term changes
- [ ] Write tests for the app(s)
- [ ] Implement book details view
- [ ] Implement user authentication
- [ ] Implement user favourite(s) feature
- [x] Dockerize the app(s)
- [x] Deploy on aws
- [ ] Setup CI/CD

## Deployment Details

1. Create a Dockerfile for both frontend and backend.
2. Build and push the Docker images to Amazon Elastic Container Registry (ECR).
3. Create a new task definition on Amazon ECS with both the Docker images.
4. Create a new cluster on ECS.
5. Create a new service within the cluster using the task definition.
6. Update the security group to give sufficient inbound network access.

## Demo

Please visit: http://50.19.195.183:8080/

## License

This project is licensed under the terms of the MIT license. See the [LICENSE](LICENSE) file for details.
