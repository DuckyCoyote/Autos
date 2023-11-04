const express = require("express");
const body_parser = require("body-parser");
const cors = require("cors");
const pug = require("pug");
const path = require("path");
const app = express();

const session = require("express-session");
const crypto = require("crypto");

const oneDay = 1000 * 24 * 60 * 60;
const sessionHandler = session({
	secret: crypto.randomBytes(32).toString("hex"),
	resave: false,
	saveUninitialized: false,
	cookie: { maxAge: oneDay, httpOnly: true },
});

const PORT = process.env.PORT || 3000;

const routerApi = require("./routes/index.js");

app.use(body_parser.json());

const whitelist = [
	"http://localhost:3000",
	"http://localhost:5173",
	"http://localhost:8080",
];

const options = {
	origin: (origin, callback) => {
		if (whitelist.includes(origin) || !origin) {
			callback(null, true);
		} else {
			callback(new Error("Cors not allowed"));
		}
	},
};

app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "views")));

app.use(cors(options));

app.use(sessionHandler);

const requireSession = (req, res, next) => {
	if (req.session && req.session.sesion) {
		next();
	} else {
		res.redirect("/login");
	}
};

routerApi(app, requireSession);

app.listen(PORT, async () => {
	console.log("Listening in port: " + PORT);
});
