const QuestionCateogoryServ = require("../services/question-category.service");
const response = require("../utils/response");

class QuestionCategoryController{
    async create(req,res){
        const result = await QuestionCateogoryServ.create(req.body);
        res.status(201).send(response("Categories created successfully",result));
    }

    async getAll(req,res){
        const result = await QuestionCateogoryServ.getAll();
        res.status(201).send(response("All Categories",result));
    }

    async update(req,res){
        const result = await QuestionCateogoryServ.update(req.params.categoryId,req.body);
        res.status(201).send(response("Category updated successfully",result));
    }

    async delete(req,res){
        const result = await QuestionCateogoryServ.delete(req.params.categoryId);
        res.status(201).send(response("Category deleted successfully",result));
    }
}

module.exports = new QuestionCategoryController();