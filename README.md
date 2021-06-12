# Truenorth Task App

## Prerequisites
-   Docker
-   Docker compose.
-   If you don't want to use docker, you should install MongoDB server locally.

## App development
We can start the project running `npm run dev`, and nodemon will start listening for changes on the app. By default, it will run on port `8080`.
For it to work with our database, we may need to install MongoDB locally, or just run the docker compose command: `docker-compose up` and the database will be listening on port `27017` by default.

## Running with docker
Run `npm run docker` and the app will start listening on port `3001`. A local MongoDB container will start running as well on port `27017`.