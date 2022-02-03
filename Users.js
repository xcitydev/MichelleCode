"use strict";

class Users {

    constructor(id, idUser, Username, Password, First_name, Last_name, Address, Gender, Mobile_number, Email_address) {

        this.id = id;

        this.idUser = idUser;

        this.Username = Username;

        this.Password = Password;

        this.First_name = First_name;

        this.Last_name = Last_name;

        this.Address = Address;

        this.Gender = Gender;

        this.Mobile_number = Mobile_number;

        this.Email_address = Email_address;

    }

    getId() {

        return this.id;

    }

    getidUser() {

        return this.idUser;

    }

    getUsername() {

        return this.Username;

    }

    getPassword() {

        return this.Password;

    }

    getFirst_name() {

        return this.First_name;

    }

    getLast_name() {

        return this.Last_name;

    }

    getAddress() {

        return this.Address;

    }

    getGender() {

        return this.Gender;

    }

    getMobile_number() {

        return this.Mobile_number;

    }

    getEmail_address() {

        return this.Email_address;

    }


    setidUser(idUser) {

        this.idUser = idUser;

    }

    setUsername(Username) {

        this.Username = Username;

    }

    setPassword(Password) {

        this.Password = Password;

    }

    setFirst_name(First_name) {

        this.First_name = First_name;

    }

    setLast_name(Last_name) {

        this.Last_name = Last_name;

    }

    setAddress(Address) {

        this.Address = Address;

    }

    setGender(Gender) {

        this.Gender = Gender;

    }

    setMobile_number(Mobile_number) {

        this.Mobile_number = Mobile_number;

    }

    setEmail_address(Email_address) {

        this.Email_address = Email_address;

    }

}

module.exports = Users;