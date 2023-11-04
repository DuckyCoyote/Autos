const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  try {
    res.render('login');
  } catch (error) {
    console.error(error);
  }
})

module.exports = router;