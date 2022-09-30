const mongoose = require('mongoose');
//----------------------------------->

//Schema---------------------------->
const RankingSchema = new mongoose.Schema({
    ranking:{type: Object, required: true},
    show:{type: Boolean, default: true},
},{
    timestamps: true,
});

RankingSchema.virtuals('id').get(function(){
    return this._id.toHexString();
});  

RankingSchema.set('toJSON',{
    virtuals: true,
});

//Model---------------------------->
const Model = mongoose.model('Ranking', RankingSchema);


//Export----------------------------->
module.exports = Model;

// object: {'Name of the ranking authority':value,'Ranking Value':value}.
