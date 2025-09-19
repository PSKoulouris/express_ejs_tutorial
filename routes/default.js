const express = require("express")

const router = express.Router()


//Change application.get to router.get and require Router()


router.get("/", function(req,res){
    //res.sendFile("Hello"); //sendFile to transfer a file with a psecific path. 2: create the file path to access file
    //const htmlFilePath = path.join(__dirname, "views", "index.html")
    //res.sendFile(htmlFilePath)
    res.render("index")

})

router.get("/about", function(req,res){
    //res.sendFile("Hello"); //sendFile to transfer a file with a psecific path. 2: create the file path to access file
    //const htmlFilePath = path.join(__dirname, "views", "about.html")
    //res.sendFile(htmlFilePath)
    res.render("about")
})

//export information from the file:
module.exports = router