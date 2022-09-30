const mongoose = require('mongoose');
//----------------------------------->

//Schema---------------------------->
const committeeSchema = new mongoose.Schema({
    committee:{type: Object, required: true},
    show:{type: Boolean, default: true},
},{
    timestamps: true,
});

committeeSchema.virtuals('id').get(function(){
    return this._id.toHexString();
});  

committeeSchema.set('toJSON',{
    virtuals: true,
});

//Model---------------------------->
const Model = mongoose.model('committee', committeeSchema);


//Export----------------------------->
module.exports = Model;

// object: {'Title of the committee section':value,'committee Content':value}.
