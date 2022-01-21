const AssessmentServ = require("../services/assessment.service");
const response = require("../utils/response");

class AssessmentController{
    async create(req,res){
        const result = await AssessmentServ.create(req.body);
        res.status(201).send(response("Assessment(s) created successfully",result));
    }

    async getAll(req,res){
        const result = await AssessmentServ.getAll();
        res.status(201).send(response("All Assessment",result));
    }

    async getOne(req,res){
        const result = await AssessmentServ.getOne(req.params.assessmentId);
        res.status(201).send(response("Assessment",result));
    }

    async update(req,res){
        const result = await AssessmentServ.update(req.params.assessmentId,req.body);
        res.status(201).send(response("Assessment updated successfully",result));
    }

    async delete(req,res){
        const result = await AssessmentServ.delete(req.params.assessmentId);
        res.status(201).send(response("Assessment deleted successfully",result));
    }
}

module.exports = new AssessmentController();