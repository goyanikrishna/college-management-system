const express = require("express");
const router = express.Router();

const scheduleController = require("../Controllers/ScheduleController");

router.post('/add', (req, res) => scheduleController.schedule.add(req, res))
router.get('/get', (req, res) => scheduleController.schedule.get(req, res))
router.get('/getById', (req, res) => scheduleController.schedule.getById(req, res))
router.post('/update', (req, res) => scheduleController.schedule.update(req, res))
router.delete('/delete', (req, res) => scheduleController.schedule.delete(req, res))

module.exports = router