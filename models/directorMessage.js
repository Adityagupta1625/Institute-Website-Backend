const mongoose = require('mongoose');
//----------------------------------->

//Schema---------------------------->
const Schema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    messageText: {
        type: String,
        required: true
    },
    directorName: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true

    }, date: { type: Date, required: true },
    uploadDate: {
        type: Date,
        default: Date.now()
    },
    updateDate: {
        type: Date,
        default: Date.now()
    },
    SourceOfInfo: {
        type: Object,
        default: {
            name: null,
            email: null,
            designation: null,
            department: null
        }
    }
}, {
    timestamps: true,
});

//Model---------------------------->
const Model = mongoose.model('directorMessage', Schema);

//Export----------------------------->
module.exports = Model;