"use strict";

var db = require('../db-connection');

class RestaurantDB{
    getAllRestaurants(callback){
        var sql = "SELECT * from restaurant_review.restaurant";
        db.query(sql, callback);
    }

    addRestaurant(restaurant, callback){
        var sql = "INSERT INTO restaurant (idRestaurant, Restaurant_name, About_us, Location, Contact_number, Opening_hours, Nearest_bus_stop_no, Nearest_bus_no, Email, Restaurant_photo) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ? ,?)";
        db.query(sql, [restaurant.getidRestaurant(), restaurant.getRestaurant_name(), restaurant.getAbout_us(), restaurant.getLocation(), restaurant.getContact_number(), restaurant.getOpening_hours(), restaurant.getNearest_bus_stop_no(), restaurant.getNearest_bus_no(), restaurant.getEmail(), restaurant.getRestaurant_photo()], callback);
    }
    updateRestaurant(restaurant, callback){
        var sql = "UPDATE restaurant SET Restaurant_name = ?, About_us = ?, Location = ?, Contact_number = ?, Opening_hours = ?, Nearest_bus_stop_no = ?, Nearest_bus_no = ?, Email = ?, Restaurant_photo = ? WHERE idRestaurant = ?";
        return db.query(sql, [restaurant.getRestaurant_name(), restaurant.getAbout_us(), restaurant.getLocation(), restaurant.getContact_number(), restaurant.getOpening_hours(), restaurant.getNearest_bus_stop_no(), restaurant.getNearest_bus_no(), restaurant.getEmail(), restaurant.getRestaurant_photo(), restaurant.getId()], callback);
    }
    deleteRestaurant(idRestaurant, callback){
        var sql = "DELETE from restaurant WHERE idRestaurant = ?";
        return db.query(sql, [idRestaurant], callback);
    }
}

module.exports = RestaurantDB;