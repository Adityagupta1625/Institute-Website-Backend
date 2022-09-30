const express = require('express');
const CommitteeController = require('./../controllers/Committee');
//----------------------------------->

//Router
const Router = express.Router();

Router.route('/add').post(CommitteeController.addCommittee);

Router.route('/show').get(CommitteeController.showCommittee);

Router.route('/showbyId').post(CommitteeController.showCommitteebyId);

Router.route('/update').post(CommitteeController.updateCommittee);

Router.route('/delete').post(CommitteeController.deleteCommittee);

//Export----------------------------->
module.exports = Router;