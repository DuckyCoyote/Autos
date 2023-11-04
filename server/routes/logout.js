const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  try {
    req.session.sesion = false;
    req.session.destroy;
    res.redirect("/");
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
