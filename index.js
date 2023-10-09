const express = require("express");
const body_parser = require("body-parser");
const cors = require('cors');

const app = express();

const PORT = process.env.PORT || 3000;

const routerApi = require('./routes/index.js');

app.use(body_parser.json());

/* const whitelist = ["http://localhost:3000"];
const options = () => {
	origin: (origin, callback) => {
		if (whitelist.includes(origin) || !origin) {
			callback(null, true);
		} else {
			callback(new Error("Cors not allowed"));
		}
	}
}

app.use(cors(options));*/

routerApi(app);

app.listen(PORT, async () => {
	console.log("Listening in port: " + PORT);
});
