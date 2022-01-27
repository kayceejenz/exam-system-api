const AssessmentCtrl = require("../controllers/assessment.controller");
const router = require("express").Router();


router.post("/create", AssessmentCtrl.create);
router.get("/", AssessmentCtrl.getAll);
router.get("/:assessmentId",AssessmentCtrl.getOne)
router.put("/update/:assessmentId", AssessmentCtrl.update);
router.delete("/delete/:assessmentId", AssessmentCtrl.delete);
router.get("/prepare/:userId/:assessmentId",AssessmentCtrl.prepareAssessmentForUser);
router.post("/submit/:userId/:assessmentId",AssessmentCtrl.evaluateAssessmentForUser);


module.exports = router;