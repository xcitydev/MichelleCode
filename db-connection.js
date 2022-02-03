var mysql = require('mysql');

var connection = mysql.createConnection({

    host:'localhost',

    port: '3306',

    user:'root',

    password:'cdev',

    database: 'restaurant_review'

});



connection.connect(err => {  // test out connetion and console.log error if there is one

    if (err) throw err;

    console.log('Connected To DB');

});

module.exports = connection;