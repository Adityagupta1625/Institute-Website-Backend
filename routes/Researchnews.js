const express = require('express');
const researchNewsController = require('./../controllers/researchNews');
//----------------------------------->

//Router
const Router = express.Router();

Router.route('/add').post(researchNewsController.addResearchNews);

Router.route('/show').get(researchNewsController.showResearchNews);

Router.route('/showbyid').post(researchNewsController.showResearchNewsbyId);

Router.route('/update').post(researchNewsController.updateResearchNews);

Router.route('/delete').post(researchNewsController.deleteResearchNews);

//Export----------------------------->
module.exports = Router;