const express = require("express");
const router = express.Router();

const adminController = require("../Controllers/AdminController");

router.post('/register', (req, res) => adminController.admin.register(req, res))
router.post('/activateAccount', (req, res) => adminController.admin.activateAccount(req, res))
router.post('/login', (req, res) => adminController.admin.login(req, res))
router.post('/forgetPassword', (req, res) => adminController.admin.forgetPassword(req, res))
router.post('/verifyOtpCode', (req, res) => adminController.admin.verifyOtpCode(req, res))
router.post('/changePassword', (req, res) => adminController.admin.changePassword(req, res))
router.post('/add', (req, res) => adminController.admin.add(req, res))
router.get('/get', (req, res) => adminController.admin.get(req, res))
router.get('/getById', (req, res) => adminController.admin.getById(req, res))
router.post('/update', (req, res) => adminController.admin.update(req, res))
router.delete('/delete', (req, res) => adminController.admin.delete(req, res))

module.exports = router