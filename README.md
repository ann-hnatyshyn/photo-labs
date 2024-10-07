
# react-photolabs

The PhotoLabs project, developed for the Web Development React course, is a Single Page Application built with React and Express. It features an interactive photo gallery where users can browse, view, and filter images by topic, providing a seamless experience for exploring various photo collections.


## Key Features:


Users can like or unlike as many photos as they wish.
When viewing a selected photo, users are also shown similar images to explore.







Home Page:

![homeroute](https://github.com/user-attachments/assets/8636d9ab-adad-4145-bd2e-ae34b00d024b)




Selected Photo:

<img width="1411" alt="photodetailsmodal" src="https://github.com/user-attachments/assets/c43a7b4a-ee28-4122-8c63-c17e8c978cc6">




Photo Favorited: 

![photofavbutton](https://github.com/user-attachments/assets/27dcb93f-028b-42fb-9b17-0ff086efae14)


## Setup

Install dependencies with `npm install` in each respective `/frontend` and `/backend`.

## Creating The DB
Use the psql -U labber command to login to the PostgreSQL server with the username labber and the password labber. This command MUST be run in a vagrant terminal, we are using the PostgreSQL installation provided in the vagrant environment. M1/M2 and WSL2 users can execute this command in their terminal.

Create a database with the command CREATE DATABASE photolabs_development;.

Copy the .env.example file to .env.development and fill in the necessary PostgreSQL configuration. The node-postgres library uses these environment variables by default.

PGHOST=localhost
PGUSER=labber
PGDATABASE=photolabs_development
PGPASSWORD=labber
PGPORT=5432
Seeding

Run a the development server with npm start in the Host environment. We are only using vagrant for psql this week.

Both of these achieve the same result.

Make a GET request to /api/debug/reset with curl http://localhost:8001/api/debug/reset.
Use the browser to navigate to http://localhost:8001/api/debug/reset.
Run The Server
Running the server normally

npm start
Running the server so it returns an error when saving/deleting for testing the client's error handling capabilities

npm run error


## [Frontend] Running Webpack Development Server

```sh
cd frontend
npm start
```

## [Backend] Running Backend Servier


```sh
cd backend
npm start
```


## Additional Setup Instructions:
```sh
Restart the Database:
Before running the application, ensure that the database is reset by navigating to:
http://localhost:8001/api/debug/reset
This will restart the database and prepare it for use.
```



![parentChild](https://github.com/user-attachments/assets/5ded6a52-171a-43ba-a1f5-afdcc58ed3bf)





