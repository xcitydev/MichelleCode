var express = require("express"); //using the express web framework

var restaurantController = require('./controllers/restaurantController'); // set restaurantController to the restaurantController class
var reviewsController = require('./controllers/reviewsController'); // set reviewsController to the reviewsController class
var usersController = require('./controllers/userController'); // set usersController to the usersController class
var app = express(); // set variable app to be an instance of express framework. From now on, app is the express

app.use(express.static("./public")); //static files are to be served from the public folder - for eg. html, images, css
app.use(express.json()); // json() is a method inbuilt in express to recognize the incoming Request Object from the web client as a JSON Object.
// In time to come we will need to accept new or edited comments from user

app.route('/restaurant').get(restaurantController.getAllRestaurants); // activate the getAllRestaurant method if the route is GET(method) /restaurant
app.route('/restaurant').post(restaurantController.addRestaurant); // activate the addRestaurant method if the route is POST(method) /restaurant
app.route('/restaurant/:id').put(restaurantController.updateRestaurant) // activate the updateRestaurant method if the route is PUT(method) /restaurant/:id
app.route('/restaurant/:id').delete(restaurantController.deleteRestaurant); // activate the deleteRestaurant method if the route is DELETE(method) /restaurant/:id

app.route('/reviews').get(reviewsController.getAllReviews); // activate the getAllReviews method if the route is GET(method) /reviews
app.route('/reviews').post(reviewsController.addReviews); // activate the addReviews method if the route is POST(method) /reviews
app.route('/reviews/:id').put(reviewsController.updateReviews) // activate the updateReviews method if the route is PUT(method) /reviews/:id
app.route('/reviews/:id').delete(reviewsController.deleteReviews); // activate the deleteReviews method if the route is DELETE(method) /reviews/:id

app.route('/user').get(usersController.getAllUsers); // activate the getAllUsers method if the route is GET(method) /user
app.route('/user').post(usersController.addUsers); // activate the addUsers method if the route is POST(method) /user
app.route('/user/:id').put(usersController.updateUsers) // activate the updateUsers method if the route is PUT(method) /user/:id
app.route('/user/:id').delete(usersController.deleteUsers); // activate the deleteUsers method if the route is DELETE(method) /user/:id


app.listen(8080, "127.0.0.1"); // start the nodejs to be listening for incoming request @ port 8080
console.log("web server running @ http://127.0.0.1:8080"); // output to console 