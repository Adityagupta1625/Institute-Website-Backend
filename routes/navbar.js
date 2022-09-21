const express = require('express');
const navbarController = require('../controllers/Navbar');
//----------------------------------->

//Router
const Router = express.Router();

Router.route('/show').get(navbarController.show);
Router.route('/add').post(navbarController.add);
Router.route('/delete').delete(navbarController.delete);
Router.route('/create').post(navbarController.create);



//Export----------------------------->
module.exports = Router;