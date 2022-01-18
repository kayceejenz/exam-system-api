const mongoose = require("mongoose");

const questionCategorySchema = new mongoose.Schema({
    description : {
        type: String,
        required: true
    }
},
{
    timestamps: true
});

module.exports = mongoose.model("questionCategory",questionCategorySchema);