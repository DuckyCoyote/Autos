const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  try {
    const sesion = req.session.sesion;
    res.render("index", { sesion });
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
