const UserAssessment = require("../models/user-assessment.model");
const AssessmentService = require("../services/assessment.service");
const QuestionService = require("../services/question.service");
const CustomError = require("../utils/custom-error");

class UserAssessmentService{
    async prepareAssessment(data){

        const {userId, assessmentId} = data;

        let assessmentQuestionCollection = [];
        let response = {};

        // get assessment
        const assessment = await AssessmentService.getOne(assessmentId);

        if(assessment){
            const questions = await QuestionService.fetchQuestions(assessment.questionBank[0]._id,assessment.numberOfQuestion);
            
            // Check if user assessment already exist
            const existingAssessment = await UserAssessment.findOne({user: userId, assessment: assessmentId});
            if(!existingAssessment){    

                // Loop through each question to create a child collection for the parent
                for(let question of questions){

                    const userAssessmentCollection = {
                        question : question,
                        choice: "",
                        isCorrect: false,
                        markGotten: 0,
                    }

                    assessmentQuestionCollection.push(userAssessmentCollection)
                }

                // user assessment parent collection
                const userAssessment = {
                    user : userId,
                    assessment: assessmentId,
                    assessmentScript: assessmentQuestionCollection,
                    mark : 0
                }
                
                // Saving user assessment
                response = await new UserAssessment(userAssessment).save();
            }
            response =  await UserAssessment.findOne({user: userId, assessment: assessmentId})
            .populate("user assessment assessmentScript.question", "-__v -createdAt -updatedAt -password");
        }

        return response;
    }

    async markAssessment(data,submittedAssessment){
        const { userId, assessmentId } = data;
        let totalMark = 0;

        // Get user assessment
        const userAssessment = await UserAssessment.findOne({user: userId, assessment: assessmentId}).populate("assessment assessmentScript.question");

        // Loop through the submitted assessment and mark
        for(let subAss of submittedAssessment){
            let questionCtx = userAssessment.assessmentScript.find(({_id}) => _id == subAss._id);
            
            // Check answers and allocate mark
           questionCtx.choice = subAss.choice;
           questionCtx.isCorrect = await this.isCorrect(subAss,questionCtx);
           questionCtx.markGotten = questionCtx.isCorrect ? userAssessment.assessment.markPerQuestion : 0;

           // Sum to total mark
           totalMark += questionCtx.markGotten;

           // update the user assessment
           const updateIndex = userAssessment.assessmentScript.findIndex(({_id}) => _id == subAss._id);
           if(updateIndex !== -1){
                userAssessment.assessmentScript[updateIndex] = questionCtx;
           }
        }

        // update total mark of assessment and update
        userAssessment.mark = totalMark;

        await UserAssessment.findByIdAndUpdate(
            { _id: userAssessment._id },
            { $set: userAssessment},
            { new: true }
        );

        // return user assessment
        return await UserAssessment.findOne({user: userId, assessment: assessmentId})
        .populate("user assessment assessmentScript.question", "-__v -createdAt -updatedAt -password");
    }

    async isCorrect(subAss, questionCtx){
        let passStatus = false;

        //check if the length of required answer is correct
        if(subAss.choice.length === questionCtx.question.answer.length){

            // loop through and ensure that all user choice are correct from the question answers
            subAss.choice.forEach(element => {
                if(!questionCtx.question.answer.includes(element)){
                    return passStatus = false;
                }
                passStatus = true;
            });
        }
        
        return passStatus;
    }

}

module.exports = new UserAssessmentService();