const UserAssessment = require("../models/user-assessment.model");
const AssessmentService = require("../services/assessment.service");
const QuestionService = require("../services/question.service");
const CustomError = require("../utils/custom-error");

class UserAssessmentService{
    async prepareAssessment(data){
        const {userId, assessmentId} = data;
        let response = {};
        // get assessment
        const assessment = await AssessmentService.getOne(assessmentId);

        if(assessment){
            const questions = await QuestionService.fetchQuestions(assessment.questionBank[0]._id,assessment.numberOfQuestion);
            // Check if user assessment already exist
            const existingAssessment = await UserAssessment.findOne({user: userId, assessment: assessmentId});
            if(!existingAssessment){         
                
                const userAssessment = {
                    user : userId,
                    assessment: assessmentId,
                    assessmentScript: questions,
                    mark : 0
                }
                
                // Saving user assessment
                response = await new UserAssessment(userAssessment).save();
            }
            response =  await UserAssessment.findOne({user: userId, assessment: assessmentId})
            .populate("user assessment assessmentScript.question","-__v -createdAt -updatedAt");
        }

        return response;
    }
}

module.exports = new UserAssessmentService();