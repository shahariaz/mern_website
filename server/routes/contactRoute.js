const router = require("express").Router();
const { contactHandler } = require("../controllers/contactController.js");
router.route("/contact").post(contactHandler);
router.get("/contact", (_, res) => {
  res.send("Hello from contact route");
});

module.exports = router;
