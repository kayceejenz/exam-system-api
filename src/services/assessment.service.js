const Assessment = require("../models/assessment.model");
const CustomError = require("../utils/custom-error");

class AssessmentService{
    async create(data){
        data.markPerQuestion = data.totalMark / data.numberOfQuestion;
        return await new Assessment(data).save();
    }

    async getAll(){
        return await Assessment.find({},{__v:0,createdAt:0,updatedAt:0});
    }

    async getOne(assessmentId){
        const assessment = await Assessment.findOne({_id : assessmentId},{__v:0,createdAt:0,updatedAt:0});
        if(!assessment) throw new CustomError("Assessment not found",404);
        
        return assessment;
    }

    async update(assessmentId,data) {
        if(data.totalMark){
            data.markPerQuestion = data.totalMark / data.numberOfQuestion;
        }
        const assessment = await Assessment.findByIdAndUpdate(
          { _id: assessmentId },
          { $set: data },
          { new: true }
        );
    
        if (!assessment) throw new CustomError("Assessment dosen't exist", 404);
    
        return assessment;
      }
    
      async delete(assessmentId) {
        return await Assessment.findOne({ _id: assessmentId }).remove();
      }
}

module.exports = new AssessmentService();