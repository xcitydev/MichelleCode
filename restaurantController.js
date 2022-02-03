"use strict";
const RestaurantDB = require('../models/RestaurantDB');
const Restaurant = require('../models/Restaurant');

var restaurantDB = new RestaurantDB();

function getAllRestaurants(request, respond){
    restaurantDB.getAllRestaurants(function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });

}

function updateRestaurant(request, respond){
    var now = new Date();
    var restaurant = new Restaurant(parseInt(request.params.id), request.body.idRestaurant, request.body.Restaurant_name, request.body.About_us, request.body.Location, request.body.Contact_number, request.body.Opening_hours, request.body.Nearest_bus_stop_no, request.body.Nearest_bus_no, request.body.Email, request.body.Restaurant_photo);
    restaurantDB.updateRestaurant(restaurant, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function addRestaurant(request, respond){
    var now = new Date();
    var restaurant = new Restaurant(null, request.body.idRestaurant, request.body.Restaurant_name, request.body.About_us, request.body.Location, request.body.Contact_number, request.body.Opening_hours, request.body.Nearest_bus_stop_no, request.body.Nearest_bus_no, request.body.Email, request.body.Restaurant_photo, now.toString());
    restaurantDB.addRestaurant(restaurant, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    })
}

function deleteRestaurant(request, respond){
    var idRestaurant = request.params.id;
    restaurantDB.deleteRestaurant(idRestaurant, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

module.exports = {getAllRestaurants, addRestaurant, updateRestaurant, deleteRestaurant};
