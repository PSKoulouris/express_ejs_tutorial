const path = require('path')  
const fs = require('fs')   

const filePath = path.join(__dirname,"..",'data','restaurants.json')
function getStoredRestaurants(){
    const fileData =  fs.readFileSync(filePath)
    const restaurants = JSON.parse(fileData)
    return restaurants //JSON.parse(fileData)
}

function storeRestaurants(r){
    fs.writeFileSync(filePath, JSON.stringify(r))
}

module.exports = {
    getStoredRestaurants : getStoredRestaurants,  // Key : Value without the () for the function as it should not be called here but with require()
    storeRestaurants : storeRestaurants
}

