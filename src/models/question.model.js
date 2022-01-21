const mongoose = require("mongoose");
const questionTypes = require("./enums/questionType.enum");

const questionSchema = mongoose.Schema({
    category:{
        type:  mongoose.Schema.Types.ObjectId,
        ref: 'questionCategory',
        required: true
    },
    type:{
        type:String,
        enum: Object.values(questionTypes),
        required: true
    },
    instruction:{
        type: String
    },
    text:{
        type: String,
        require: true
    },
    options: [{
        type: String
    }],
    answer:[{
        type: String,
        required: true
    }]
},
{
    timestamps: true
});

module.exports = mongoose.model("question",questionSchema);
