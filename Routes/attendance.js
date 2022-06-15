const express = require("express");
const router = express.Router();

const attendanceController = require("../Controllers/AttendanceController");

router.post('/add', (req, res) => attendanceController.attendance.add(req, res))
router.get('/get', (req, res) => attendanceController.attendance.get(req, res))
router.get('/getById', (req, res) => attendanceController.attendance.getById(req, res))
router.post('/update', (req, res) => attendanceController.attendance.update(req, res))
router.delete('/delete', (req, res) => attendanceController.attendance.delete(req, res))

module.exports = router