const routes = require("express").Router();
const lesson1Controller = require('../controllers/lesson1');
 
routes.get('/', lesson1Controller.helloRoute);
routes.get ('/success', lesson1Controller.successRoute);
routes.get ('/next', lesson1Controller.nextRoute);

module.exports = routes;