const QuestionServ = require("../services/question.service");
const response = require("../utils/response");

class QuestionController{
    async create(req,res){
        const result = await QuestionServ.create(req.body);
        res.status(201).send(response("Question(s) created successfully",result));
    }

    async getAll(req,res){
        const result = await QuestionServ.getAll();
        res.status(201).send(response("All Questions",result));
    }

    async getOne(req,res){
        const result = await QuestionServ.getOne(req.params.questionId);
        res.status(201).send(response("Questions",result));
    }

    async update(req,res){
        const result = await QuestionServ.update(req.params.questionId,req.body);
        res.status(201).send(response("Question updated successfully",result));
    }

    async delete(req,res){
        const result = await QuestionServ.delete(req.params.questionId);
        res.status(201).send(response("Question deleted successfully",result));
    }
}

module.exports = new QuestionController();