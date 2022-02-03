"use strict";
const ReviewsDB = require('../models/ReviewsDB');
const Reviews = require('../models/Reviews');

var reviewsDB = new ReviewsDB();

function getAllReviews(request, respond){
    reviewsDB.getAllReviews(function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });

}

function updateReviews(request, respond){
    var now = new Date();
    var reviews = new Reviews(parseInt(request.params.id),null, request.body.id_Restaurant, request.body.Title, request.body.id_User, request.body.Ratings, request.body.Review, request.body.Contact_us);
    reviewsDB.updateReviews(reviews, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function addReviews(request, respond){
    var now = new Date();
    var reviews = new Reviews(null, request.body.idReviews, request.body.id_Restaurant, request.body.Title, request.body.id_User, request.body.Ratings, request.body.Review, request.body.Contact_us); 
    reviewsDB.addReviews(reviews, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    })
}

function deleteReviews(request, respond){
    var idReviews = request.params.id;
    reviewsDB.deleteReviews(idReviews, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

module.exports = {getAllReviews, addReviews, updateReviews, deleteReviews};
