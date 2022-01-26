const Question = require("../models/question.model");
const CustomError = require("../utils/custom-error");

class QuestionService{
    async create(data){
        if(Array.isArray(data)){
            let successfullyAddedItems = [];

            for(let item of data){
                let successItem = await new Question(item).save();
                successfullyAddedItems.push(successItem);
            }

            return successfullyAddedItems;
        }
        else{
            return await new Question(data).save();
        }
    }

    async getAll(){
        return await Question.find({},{__v:0,createdAt:0,updatedAt:0}).populate("category","description");
    }

    async getOne(questionId){
        const question = await Question.findOne({_id : questionId},{__v:0,createdAt:0,updatedAt:0}).populate("category","description");
        if(!question) throw new CustomError("Question not found",404);
        
        return question;
    }

    async update(questionId,data) {
        const question = await Question.findByIdAndUpdate(
          { _id: questionId },
          { $set: data },
          { new: true }
        );
    
        if (!question) throw new CustomError("Question dosen't exist", 404);
    
        return question;
      }
    
      async delete(questionId) {
        return await Question.findOne({ _id: questionId }).remove();
      }
      async fetchQuestions(questionCategory,numberOfQuestions){
          return await Question.aggregate([
              { $match : { category : questionCategory }},
              { $sample: { size: numberOfQuestions }}
          ]).limit(numberOfQuestions);
      }
}

module.exports = new QuestionService();