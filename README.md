#Tutorial Node.js, Express.js Back-end with Embeded JavaScript(ejs)

Install Express.js:

1- Creates a package.json file in the project:

npm init
Installs Express.js from the npm registry:

npm install express 
Saves it in the node_modules/ folder and adds it to "dependencies" in package.json as follow:

    "dependencies": {
    "express": "^5.1.0"
    }
2- Installs Nodemon, a tool that automatically restarts your server when you change files:

npm install nodemon --save-dev
3- Change in package.json → "start": "nodemon app.js" as follow:

    "scripts": {
        "start": "nodemon app.js"
    },
4- Start your app with Nodemon instead of plain Node:

    npm start

5- Install Embeded Java Script (ejs):
  
    npm install ejs

6- set ejs,and then set the path to views (html files). Rename the html files to .ejs to suport html with javascript: Install extension ejs language then in search reload editor with >reload.

    app.set("views", path.join(__dirname, "views"))
    app.set("view engine", "ejs")