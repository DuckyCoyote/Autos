const express = require("express");
const router = express.Router();

const AutoService = require("../services/auto.service.js");
const ServicioService = require("../services/servicio.service.js");

const serviceService = new ServicioService();

const serviceAuto = new AutoService();

router.get("/", async (req, res, next) => {
  try {
    const sesion = req.session.sesion;
    const services = await serviceService.findAll();
    const autos = await serviceAuto.findAll();
    res.render("autos", {
      autos,
      services,
      sesion,
    });
  } catch (error) {
    console.log(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    const auto = await serviceAuto.findOne(id);
    res.json(auto);
  } catch (error) {
    console.log(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const data = req.body;
    const auto = await serviceAuto.create(data);
    res.json(auto);
  } catch (error) {
    console.error(error);
  }
});

router.patch("/:id", async (req, res, next) => {
  try {
    let { id } = req.params;
    id = parseInt(id);
    const data = req.body;
    const auto = await serviceAuto.update(id, data);
    res.json(auto);
  } catch (error) {
    console.error(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    let { id } = req.params;
    id = parseInt(id);
    const auto = await serviceAuto.delete(id);
    res.json(auto);
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
