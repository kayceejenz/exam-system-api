const QuestionCtrl = require("../controllers/question.controller");
const router = require("express").Router();


router.post("/create", QuestionCtrl.create);
router.get("/", QuestionCtrl.getAll);
router.get("/:questionId",QuestionCtrl.getOne)
router.put("/update/:questionId", QuestionCtrl.update);
router.delete("/delete/:questionId", QuestionCtrl.delete);



module.exports = router;