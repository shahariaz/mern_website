const express = require("express");
const authController = require("../controllers/authController");
const router = express.Router();
const validate = require("../middleware/validatroMiddleware");
const signupSchema = require("../validators/authValidator");
router
  .route("/register")
  .post(validate(signupSchema), authController.authRegister);
router.route("/login").post(authController.authLogin);

router.route("/").get((req, res) => res.send("Hello from auth route"));
module.exports = router;
