const mongoose = require('mongoose');
//----------------------------------->

//Schema---------------------------->
const Schema = new mongoose.Schema({
    rankings:{type: Object, required: true},
},{
    timestamps: true,
});

//Model---------------------------->
const Model = mongoose.model('Cells', Schema);


//Export----------------------------->
module.exports = Model;