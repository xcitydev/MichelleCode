"use strict";

var db = require('../db-connection');

class UsersDB{
    getAllUsers(callback){
        var sql = "SELECT * from restaurant_review.user";
        db.query(sql, callback);
    }
    updateUsers(users, callback){
        var sql = "UPDATE user SET Username = ?, Password = ?, First_name = ?, Last_name = ?, Gender = ?, Address = ?, Mobile_number = ?, Email_address = ? WHERE idUser = ?";
        return db.query(sql, [ users.getUsername(), users.getPassword(), users.getFirst_name(), users.getLast_name(), users.getGender(), users.getAddress(), users.getMobile_number(), users.getEmail_address(), users.getId()], callback);
    }
    addUsers(users, callback){
        var sql = "INSERT INTO user (idUser, Username, Password, First_name, Last_name, Gender, Address, Mobile_number, Email_address) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)"; //same number of question nmarks
        db.query(sql, [users.getidUser(), users.getUsername(), users.getPassword(), users.getFirst_name(), users.getLast_name(), users.getGender(), users.getAddress(), users.getMobile_number(), users.getEmail_address()], callback);
    }
    deleteUsers(idUser, callback){
        var sql = "DELETE from user WHERE idUser = ?";
        return db.query(sql, [idUser], callback);
    }
}

module.exports = UsersDB;