const express = require('express');
const RankingController = require('./../controllers/Ranking');
//----------------------------------->

//Router
const Router = express.Router();

Router.route('/add').post(RankingController.addRanking);

Router.route('/show').get(RankingController.showRanking);

Router.route('/showbyId').post(RankingController.showRankingbyId);

Router.route('/update').post(RankingController.updateRanking);

Router.route('/delete').post(RankingController.deleteRanking);

//Export----------------------------->
module.exports = Router;