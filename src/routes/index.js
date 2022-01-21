const router = require("express").Router();

router.use("/auth", require("./auth.route"));
router.use("/users", require("./user.route"));
router.use("/question-category", require("./question-category.route"));
router.use("/question", require("./question.route"));
router.use("/assessment", require("./assessment.route"));


module.exports = router