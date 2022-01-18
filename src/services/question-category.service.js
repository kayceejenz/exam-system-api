const QuestionCategory = require("../models/question-category.model");

class QuestionCategoryService{
    async create(data){
        if(Array.isArray(data)){
            let successfullyAddedItems = [];

            for(let item of data){
                let successItem = await new QuestionCategory(item).save();
                successfullyAddedItems.push(successItem);
            }

            return successfullyAddedItems;
        }
        else{
            return await new QuestionCategory(data).save();
        }
    }

    async getAll(){
        return await QuestionCategory.find({},{__v:0,createdAt:0,updatedAt:0});
    }

    async update(categoryId,data) {
        const questionCateogry = await QuestionCategory.findByIdAndUpdate(
          { _id: categoryId },
          { $set: data },
          { new: true }
        );
    
        if (!questionCateogry) throw new CustomError("Question category dosen't exist", 404);
    
        return questionCateogry;
      }
    
      async delete(categoryId) {
        return await QuestionCategory.findOne({ _id: categoryId }).remove();
      }
}

module.exports = new QuestionCategoryService();