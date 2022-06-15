const express = require("express");
const router = express.Router();

const salaryController = require("../Controllers/SalaryController");

router.post('/add', (req, res) => salaryController.salary.add(req, res))
router.get('/get', (req, res) => salaryController.salary.get(req, res))
router.get('/getById', (req, res) => salaryController.salary.getById(req, res))
router.post('/update', (req, res) => salaryController.salary.update(req, res))
router.delete('/delete', (req, res) => salaryController.salary.delete(req, res))

module.exports = router