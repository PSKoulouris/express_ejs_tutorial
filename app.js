//Create the server and return a message  to browser for successful connection:
    //when creating filepaths with /index, then alter all the filepaths in html ex: href="index.html" into href="/index"

const express = require ("express"); //name of the package

const defaultRoutes = require('./routes/default')
const restaurantsRoutes = require('./routes/restaurants')

const uuid = require("uuid") //installed with npm install uuid


const path = require("path");
const fs = require("fs");
const app = express(); // return an object

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
//Create a middleware using public to make css works:
app.use(express.static("public"));

//encode data  to be readable
app.use(express.urlencoded({extended:false}))

//after npm install ejs, set ejs,and then set the path to views (html files). Rename the html files to .ejs to suport html with javascript: Install extension ejs language then in search reload editor with >reload. Create new folder includes in views then three files: head.ejs...
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")


//get an answer from the server(get.app), then write a comment after 
//app.get('/', (req,res) =>{
  //  res.send("<h1>Server successfully created and accessed at localhost:3000</h1>");
//})


app.get("/", function(req,res){
    //res.sendFile("Hello"); //sendFile to transfer a file with a psecific path. 2: create the file path to access file
    //const htmlFilePath = path.join(__dirname, "views", "index.html")
    //res.sendFile(htmlFilePath)
    res.render("index")

})

app.get("/about", function(req,res){
    //res.sendFile("Hello"); //sendFile to transfer a file with a psecific path. 2: create the file path to access file
    //const htmlFilePath = path.join(__dirname, "views", "about.html")
    //res.sendFile(htmlFilePath)
    res.render("about")
})

app.get("/confirm", function(req,res){
    //res.sendFile("Hello"); //sendFile to transfer a file with a psecific path. 2: create the file path to access file
    //const htmlFilePath = path.join(__dirname, "views", "confirm.html")
    //res.sendFile(htmlFilePath)
    res.render("confirm")

})

///////////////////////////////////////////////////////
//////////////////////////////////////////////////////
app.get("/recommend", function(req,res){
    //res.sendFile("Hello"); //sendFile to transfer a file with a psecific path. 2: create the file path to access file
    //const htmlFilePath = path.join(__dirname, "views", "recommend.html")
    //res.sendFile(htmlFilePath)
    res.render("recommend")
})

//Form submission for http://localhost:3000/recommend

app.post('/recommend', function(req,res){
    const restaurant = req.body

    restaurant.rId = uuid.v4() //generate Id keys automatically. use version v4 for integers only 
 
    //const htmlFilePath = path.join(__dirname,'views','confirm.html')
   
    const filePath = path.join(__dirname, 'data','restaurants.json')
   //read restauatnt.json file
    const fileData = fs.readFileSync(filePath)
    // parse json information to modify data file
    const restaurants = JSON.parse(fileData)
    //add new inforamtion to json
    restaurants.push(restaurant)
    //write to save data pushed to file
    fs.writeFileSync(filePath, JSON.stringify(restaurants))
 
    //res.sendFile(htmlFilePath)
    res.redirect("confirm")
})


//////////////////////////////////////////////////////
/////////////////////////////////////////////////////


app.get("/restaurants", function(req,res){
    //res.sendFile("Hello"); //sendFile to transfer a file with a psecific path. 2: create the file path to access file
    //const htmlFilePath = path.join(__dirname, "views", "restaurants.html")
    //res.sendFile(htmlFilePath)
    
//read restauatnt.json file to dynamically update the restaurant in html/ejs restaurants.ejs:
    const filePath = path.join(__dirname, 'data','restaurants.json')
    const fileData = fs.readFileSync(filePath)
    const restaurants = JSON.parse(fileData)
    res.render("restaurants", {numberOfRestaurants:restaurants.length, storedRests: restaurants})


    //res.render("restaurants") code before the dynamically injected restaurants data into restaurants.ejs
})


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//handle urls for all different restaurants (app.get("/restaurants/r1"), app.get("/restaurants/r2")). static urls
//Dynamic URLS:

app.get("/restaurants/:rid", function(req, res){
    //send back the right restaurant details:
    const restaurantId = req.params.rid
    console.log(restaurantId)

    const filePath = path.join(__dirname, 'data','restaurants.json')
    const fileData = fs.readFileSync(filePath)
    const restaurants = JSON.parse(fileData)
    
    for(const restaurant of restaurants){
        if(restaurantId === restaurant.rId){
            return res.render("restaurants-details", {restaurant})
        }
    }

})
*/


app.use(express.static('public'))
app.use(express.urlencoded({extended:false}))

app.use('/',defaultRoutes)
app.use('/',restaurantsRoutes)


app.set('views', path.join(__dirname,'views'))
app.set('view engine', 'ejs')

//For all other unsupported routes:middleware function to handle 404 errors

app.use(function(req,res){
    res.status(404).render('404')
})

//if path not found or changed, or something wrong that happens on the server side handled with:
app.use(function(err, req, res, next){  //when using erro, use next to handle the after error.
    console.log(err)
    res.status(500).render('500')
})

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
app.listen(3000) //3000 or 8000 for accessible secure ports
