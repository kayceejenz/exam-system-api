const mongoose = require("mongoose");

const userAssessment = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true
    },
    assessment: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "assessment",
        required: true
    },
    mark: {
        type: Number,
        required: true
    },
    assessmentScript: [{
        question:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "question"
        },
        choice:{
            type: String,
        },
        isCorrect: {
            type: Boolean
        },
        markGotten: {
            type: Number
        }
    }]
});

module.exports = mongoose.model("userAssessment",userAssessment);

