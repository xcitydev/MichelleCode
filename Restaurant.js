"use strict";



class Restaurant {

    constructor(id, idRestaurant, Restaurant_name, About_us, Location, Contact_number, Opening_hours, Nearest_bus_stop_no, Nearest_bus_no, Email, Restaurant_photo) {

        this.id = id;

        this.idRestaurant = idRestaurant;

        this.Restaurant_name = Restaurant_name;

        this.About_us = About_us;

        this.Location= Location;

        this.Contact_number = Contact_number;

        this.Opening_hours = Opening_hours;

        this.Nearest_bus_stop_no = Nearest_bus_stop_no;

        this.Nearest_bus_no = Nearest_bus_no;

        this.Email = Email;

        this.Restaurant_photo = Restaurant_photo;

    }



    getId() {

        return this.id;

    }

    getidRestaurant() {

        return this.idRestaurant;

    }

    getRestaurant_name() {

        return this.Restaurant_name;

    }

    getAbout_us() {

        return this.About_us;

    }

    getLocation() {

        return this.Location;

    }

    getContact_number() {

        return this.Contact_number;

    }

    getOpening_hours() {

        return this.Opening_hours;

    }

    getNearest_bus_stop_no() {

        return this.Nearest_bus_stop_no;

    }

    getNearest_bus_no() {

        return this.Nearest_bus_no;

    }

    getEmail() {

        return this.Email;

    }

    getRestaurant_photo() {

        return this.Restaurant_photo;

    }


    setidRestaurant(idRestaurant) {

        this.idRestaurant = idRestaurant;

    }

    setRestaurant_name(Restaurant_name) {

        this.Restaurant_name = Restaurant_name;

    }

    setAbout_us(About_us) {

        this.About_us = About_us;

    }

    setLocation(Location) {

        this.Location = Location;

    }

    setContact_number(Contact_number) {

        this.Contact_number = Contact_number;

    }

    setOpening_hours(Opening_hours) {

        this.Opening_hours = Opening_hours;

    }

    setNearest_bus_stop_no(Nearest_bus_stop_no) {

        this.Nearest_bus_stop_no = Nearest_bus_stop_no;

    }

    setNearest_bus_no(Nearest_bus_no) {

        this.Nearest_bus_no = Nearest_bus_no;

    }

    setEmail(Email) {

        this.Email = Email;

    }

    setRestaurant_photo(Restaurant_photo) {

        this.Restaurant_photo = Restaurant_photo;

    }



}

module.exports = Restaurant;