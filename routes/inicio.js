const express = require('express');

const router = express.Router();

router.get('/', async (req, res) => {
	try {
		res.status(200).json({ message: "Inicio" })
	} catch (error) {
		console.log(error)
	}
});

module.exports = router;
