const mongoose = require('mongoose');
//----------------------------------->

//Schema---------------------------->
const Schema = new mongoose.Schema({
    instituteDevleopment:{type: String},
    internalComplaints:{type: String},
    printMedia:{type: String},
    socialMedia:{type: String},
    webDevelopment:{type: String},
},{
    timestamps: true,
});

//Model---------------------------->
const Model = mongoose.model('Commities', Schema);


//Export----------------------------->
module.exports = Model;