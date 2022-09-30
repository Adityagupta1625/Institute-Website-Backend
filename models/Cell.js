const mongoose = require('mongoose');
//----------------------------------->

//Schema---------------------------->
const cellSchema = new mongoose.Schema({
    cell:{type: Object, required: true},
    show:{type: Boolean, default: true},
},{
    timestamps: true,
});

cellSchema.virtuals('id').get(function(){
    return this._id.toHexString();
});  

cellSchema.set('toJSON',{
    virtuals: true,
});

//Model---------------------------->
const Model = mongoose.model('cell', cellSchema);


//Export----------------------------->
module.exports = Model;

// object: {'Title of the cell section':value,'cell Content':value}.
