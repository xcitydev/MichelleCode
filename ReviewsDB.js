"use strict";

var db = require('../db-connection');
const RestaurantDB = require('./RestaurantDB');

class ReviewsDB{
    getAllReviews(callback){
        var sql = "SELECT * from restaurant_review.reviews";
        db.query(sql, callback);
    }

    updateReviews(reviews, callback){
        var sql = "UPDATE reviews SET id_Restaurant = ?, Title = ?, id_User = ?, Ratings = ?, Review = ?, Contact_us = ? WHERE idReviews = ?";
        return db.query(sql, [reviews.getid_Restaurant(), reviews.getTitle(), reviews.getid_User(), reviews.getRatings(), reviews.getReview(), reviews.getContact_us(), reviews.getId()], callback);
    }
    
    addReviews(reviews, callback){
        var sql = "INSERT INTO reviews (idReviews, id_Restaurant, Title, id_User, Ratings, Review, Contact_us) VALUES (?, ?, ?, ?, ?, ?, ?)";
        db.query(sql, [reviews.getidReviews(), reviews.getid_Restaurant(), reviews.getTitle(), reviews.getid_User(), reviews.getRatings(), reviews.getReview(), reviews.getContact_us()], callback);
    }

    deleteReviews(idReviews, callback){
        var sql = "DELETE from reviews WHERE idReviews = ?";
        return db.query(sql, [idReviews], callback);
    }
}

module.exports = ReviewsDB;