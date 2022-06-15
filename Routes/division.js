const express = require("express");
const router = express.Router();

const divisionController = require("../Controllers/DivisionController");

router.post('/add', (req, res) => divisionController.division.add(req, res))
router.get('/get', (req, res) => divisionController.division.get(req, res))
router.get('/getById', (req, res) => divisionController.division.getById(req, res))
router.post('/update', (req, res) => divisionController.division.update(req, res))
router.delete('/delete', (req, res) => divisionController.division.delete(req, res))

module.exports = router