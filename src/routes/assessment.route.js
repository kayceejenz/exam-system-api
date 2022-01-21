const AssessmentCtrl = require("../controllers/assessment.controller");
const router = require("express").Router();


router.post("/create", AssessmentCtrl.create);
router.get("/", AssessmentCtrl.getAll);
router.get("/:assessmentId",AssessmentCtrl.getOne)
router.put("/update/:assessmentId", AssessmentCtrl.update);
router.delete("/delete/:assessmentId", AssessmentCtrl.delete);



module.exports = router;