"use strict";
const UsersDB = require('../models/UsersDB');
const Users = require('../models/Users');

var usersDB = new UsersDB();

function getAllUsers(request, respond){
    usersDB.getAllUsers(function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });

}

function updateUsers(request, respond){
    var now = new Date();
    var users = new Users(parseInt(request.params.id),null, request.body.Username, request.body.Password, request.body.First_name, request.body.Last_name, request.body.Address, request.body.Gender, request.body.Mobile_number, request.body.Email_address);
    usersDB.updateUsers(users, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function addUsers(request, respond){
    var now = new Date();
    var users = new Users(null, request.body.idUser, request.body.Username, request.body.Password, request.body.First_name, request.body.Last_name, request.body.Address, request.body.Gender, request.body.Mobile_number, request.body.Email_address);
    usersDB.addUsers(users, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    })
}

function deleteUsers(request, respond){
    var idUser = request.params.id;
    usersDB.deleteUsers(idUser, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

module.exports = {getAllUsers, addUsers, updateUsers, deleteUsers};
