const express = require("express");
const router = express.Router();

const studentController = require("../Controllers/StudentController");

router.post('/register', (req, res) => studentController.student.register(req, res))
router.post('/activateAccount', (req, res) => studentController.student.activateAccount(req, res))
router.post('/login', (req, res) => studentController.student.login(req, res))
router.post('/forgetPassword', (req, res) => studentController.student.forgetPassword(req, res))
router.post('/verifyOtpCode', (req, res) => studentController.student.verifyOtpCode(req, res))
router.post('/changePassword', (req, res) => studentController.student.changePassword(req, res))
router.post('/add', (req, res) => studentController.student.add(req, res))
router.get('/get', (req, res) => studentController.student.get(req, res))
router.get('/getById', (req, res) => studentController.student.getById(req, res))
router.post('/update', (req, res) => studentController.student.update(req, res))
router.delete('/delete', (req, res) => studentController.student.delete(req, res))

module.exports = router