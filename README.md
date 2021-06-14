# Truenorth Task App

## Prerequisites
-   Docker
-   Docker compose.
-   If you don't want to use docker, you should install NodeJS and MongoDB server locally.

## App development
First of all, we need to install all dependencies running `npm i` in the terminal in the root of the project. We can then start the project running `npm run dev`, and nodemon will start listening for changes on the app. By default, it will run on port `8080`.
For it to work with our database, we may need to install MongoDB locally, or just run the docker compose command: `docker-compose up -d mongo` and the database will be listening on port `27017` by default.

## Running with docker
Run `npm run docker` and the app will start listening on port `3001`. A local MongoDB container will start running, on port `27017`, as well.

## Testing
Run `npm run integration` to run the integration tests

## API interface

The app serves a Swagger documentation endpoint at the root of the API. (e.g. http://localhost:3001/)