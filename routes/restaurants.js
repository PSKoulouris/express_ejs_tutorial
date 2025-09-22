//add all functions required for the restaurants:

const express = require('express')

const router = express.Router()
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

router.get('/restaurants',function(req,res){
    const filePath = path.join(__dirname,'data','restaurants.json')

    const fileData =  fs.readFileSync(filePath)
    const restaurants = JSON.parse(fileData)

    res.render('restaurants', {numberOfRestaurants : restaurants.length, storedRests :restaurants})
})

router.get('/restaurants/:rid',function(req,res){
    // To send back the right restaurant details!
    const restaurantId = req.params.rid
    //console.log(restaurantId)

    const filePath = path.join(__dirname,'data','restaurants.json')
    const fileData = fs.readFileSync(filePath)

    const restaurants = JSON.parse(fileData)

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

    const filePath = path.join(__dirname, 'data','restaurants.json')
    
    const fileData = fs.readFileSync(filePath)
    const restaurants = JSON.parse(fileData)
    //restaurants.rId = restaurants.length
    restaurants.push(restaurant)

    fs.writeFileSync(filePath, JSON.stringify(restaurants))

    res.redirect('confirm')
})

router.get('/confirm',function(req,res){
    res.render('confirm')
})

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


module.exports = router

