const router = require("express").Router();
const UserCtrl = require("./../controllers/user.controller");
const auth = require('./../middlewares/auth.middleware');
const upload = require("./../middlewares/multer.middleware")
const { role } = require("./../config")

router.post("/", UserCtrl.create);
router.get("/", UserCtrl.getAll);
router.get("/:userId", auth(role.USER), UserCtrl.getOne);
router.put("/:userId", auth(role.USER), upload("image"), UserCtrl.update);
router.delete("/:userId", auth(role.USER), UserCtrl.delete);


module.exports = router