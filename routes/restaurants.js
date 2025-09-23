//add all functions required for the restaurants:
const express = require('express')
const uuid = require("uuid") //installed with npm install uuid

const path = require('path')  
const fs = require('fs')   
const router = express.Router() 
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const resUtils = require("../util/restaurants.utils")
/*

const filePath = path.join(__dirname,"..",'data','restaurants.json')
function getStoredRestaurants(){
    const fileData =  fs.readFileSync(filePath)
    const restaurants = JSON.parse(fileData)
    return restaurants //JSON.parse(fileData)
}

function storeRestaurants(r){
    fs.writeFileSync(filePath, JSON.stringify(r))
}
*/

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

router.get('/restaurants',function(req,res){
    //const filePath = path.join(__dirname,"..",'data','restaurants.json')

    //const fileData =  fs.readFileSync(filePath)
    //const restaurants = JSON.parse(fileData)
    const restaurants = resUtils.getStoredRestaurants()

    res.render('restaurants', {numberOfRestaurants : restaurants.length, storedRests :restaurants})
})

router.get('/restaurants/:rid',function(req,res){
    // To send back the right restaurant details!
    const restaurantId = req.params.rid
    //console.log(restaurantId)

   // const filePath = path.join(__dirname,"..",'data','restaurants.json')
    //const fileData = fs.readFileSync(filePath)

    //const restaurants = JSON.parse(fileData)

    const restaurants = resUtils.getStoredRestaurants()

    for(const restaurant of restaurants){
        if(restaurantId === restaurant.rId){
           return res.render('restaurant-details',{restaurant}) 
        }
    }
})

router.get('/recommend',function(req,res){
    res.render('recommend')
})


router.post('/recommend', function(req,res){
    const restaurant = req.body
    restaurant.rId = uuid.v4()

    const restaurants = resUtils.getStoredRestaurants()

    //const filePath = path.join(__dirname,"..", 'data','restaurants.json')
    
    //const fileData = fs.readFileSync(filePath)
    //const restaurants = JSON.parse(fileData)
    //restaurants.rId = restaurants.length
    restaurants.push(restaurant)

    //fs.writeFileSync(filePath, JSON.stringify(restaurants))
    resUtils.storeRestaurants(restaurants)

    res.redirect('confirm')
})

router.get('/confirm',function(req,res){
    res.render('confirm')
})



//Edit a restaurant
router.get('/restaurants/:rid/edit',function(req,res){
    //retrieve the id of the restaurant to be retrieved:
    const restaurantId = req.params.rid
    //Retrieve all restaurants:
    const restaurants = resUtils.getStoredRestaurants()

    //find the restaurant index:
    const restaurant = restaurants.find(r => r.rId === restaurantId)
    if(!restaurant){
        return res.status(404).render('404')
    }
    res.status(200).render('edit-recommend', {restaurant})

})

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

module.exports = router

