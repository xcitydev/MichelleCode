"use strict";

class Reviews {

    constructor(id, idReviews, id_Restaurant, Title, id_User, Ratings, Review, Contact_us) {

        this.id = id;

        this.idReviews = idReviews;

        this.id_Restaurant = id_Restaurant;

        this.Title = Title;

        this.id_User = id_User;

        this.Ratings = Ratings;

        this.Review = Review;

        this.Contact_us = Contact_us;

    }

    getId() {

        return this.id;

    }

    getidReviews() {

        return this.idReviews;

    }

    getid_Restaurant() {

        return this.id_Restaurant;

    }

    getTitle() {

        return this.Title;

    }

    getid_User() {

        return this.id_User;

    }

    getRatings() {

        return this.Ratings;

    }

    getReview() {

        return this.Review;

    }

    getContact_us() {

        return this.Contact_us;

    }


    setidReviews(idReviews) {

        this.idReviews = idReviews;

    }

    setid_Restaurant(id_Restaurant) {

        this.id_Restaurant = id_Restaurant;

    }

    setTitle(Title) {

        this.Title = Title;

    }

    setid_User(id_User) {

        this.id_User = id_User;

    }

    setRatings(Ratings) {

        this.Ratings = Ratings;

    }

    setReview(Review) {

        this.Review = Review;

    }

    setContact_us(Contact_us) {

        this.Contact_us = Contact_us;

    }



}

module.exports = Reviews;