const express = require("express");
const router = express.Router();

const Users = require("../services/user.service.js");
const service = new Users();

router.get("/", (req, res) => {
  try {
    res.render("login");
  } catch (error) {
    console.error(error);
  }
});

router.post("/", async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(email, password);
    const UserDb = await service.findByEmail({ where: { email } });

    if (!UserDb) {
      return res.redirect("/login");
    }

    if (UserDb.password != password) {
      return res.redirect("/login");
    }

    req.session.sesion = true;
    req.session.idUser = UserDb.id;
    res.redirect("/autos");
  } catch (error) {
    console.log(error);
  }
});

router.get("/users", async (req, res) => {
  try {
    const users = await service.findAll();
    res.json(users);
  } catch (error) {
    console.log(error);
  }
});

router.post("/users", async (req, res) => {
  try {
    const data = req.body;
    const user = await service.create(data);
    res.json(user);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
