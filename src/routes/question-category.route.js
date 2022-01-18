const QuestiionCategoryCtrl = require("../controllers/question-category.controller");
const router = require("express").Router();


router.post("/create", QuestiionCategoryCtrl.create);
router.get("/", QuestiionCategoryCtrl.getAll);
router.put("/update/:categoryId", QuestiionCategoryCtrl.update);
router.delete("/delete/:categoryId", QuestiionCategoryCtrl.delete);



module.exports = router;