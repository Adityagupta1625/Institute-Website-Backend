const express = require('express');
const AboutController = require('./../controllers/About');
//----------------------------------->

//Router
const Router = express.Router();

Router.route('/add').post(AboutController.addAbout);

Router.route('/show').get(AboutController.showAbout);

Router.route('/showbyId').post(AboutController.showAboutbyId);

Router.route('/update').post(AboutController.updateAbout);

Router.route('/delete').post(AboutController.deleteAbout);

//Export----------------------------->
module.exports = Router;