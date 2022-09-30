const express = require('express');
const CellController = require('./../controllers/Cell');
//----------------------------------->

//Router
const Router = express.Router();

Router.route('/add').post(CellController.addCell);

Router.route('/show').get(CellController.showCell);

Router.route('/showbyId').post(CellController.showCellbyId);

Router.route('/update').post(CellController.updateCell);

Router.route('/delete').post(CellController.deleteCell);

//Export----------------------------->
module.exports = Router;