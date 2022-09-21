const mongoose = require('mongoose');
//----------------------------------->

//Schema---------------------------->
const Schema = new mongoose.Schema({
    introduction: { type: String },
    vision:{type: String},
    mission:{type: String},
    quality: { type: String},
    history:{type: String},
    timeline:{type:Object},
    tour:{type: String},
    explore: {type: Array},
    
},{
    timestamps: true,
});

//Model---------------------------->
const Model = mongoose.model('About', Schema);


//Export----------------------------->
module.exports = Model;