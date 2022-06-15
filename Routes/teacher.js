const express = require("express");
const router = express.Router();

const teacherController = require("../Controllers/TeacherController");

router.post("/register", (req, res) =>teacherController.teacher.register(req, res));
router.post("/activateAccount", (req, res) =>teacherController.teacher.activateAccount(req, res));
router.post("/login", (req, res) => teacherController.teacher.login(req, res));
router.post("/forgetPassword", (req, res) =>teacherController.teacher.forgetPassword(req, res));
router.post("/verifyOtpCode", (req, res) =>teacherController.teacher.verifyOtpCode(req, res));
router.post("/changePassword", (req, res) =>teacherController.teacher.changePassword(req, res));
router.post("/add", (req, res) => teacherController.teacher.add(req, res));
router.get("/get", (req, res) => teacherController.teacher.get(req, res));
router.get("/getById", (req, res) =>teacherController.teacher.getById(req, res));
router.post("/update", (req, res) => teacherController.teacher.update(req, res));
router.delete("/delete", (req, res) =>teacherController.teacher.delete(req, res));

module.exports = router;
