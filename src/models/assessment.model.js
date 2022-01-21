const mongoose = require("mongoose");

const assessmentSchema = mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    numberOfQuestion:{
        type: Number,
        required: true
    },
    totalMark:{
        type: Number,
        required: true
    },
    markPerQuestion:{
        type: Number,
        required: true
    },
    dateTime:{
        type: Date,
        required: true
    }
},
{
    timestamps: true
});

module.exports = mongoose.model("assessment",assessmentSchema);