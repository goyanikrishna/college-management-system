const express = require('express')
const { ensureAuthorized } = require('../middleware/auth')
const router = express.Router()

const adminRoutes = require('./admin')
const attendanceRoutes = require('./attendance')
const divisionRoutes = require('./division')
const resultRoutes = require('./result')
const salaryRoutes = require('./salary')
const scheduleRoutes = require('./schedule')
const studentRoutes = require('./student')
const teacherRoutes = require('./teacher')

router.use('/admin', adminRoutes)
router.use('/attendance', attendanceRoutes)
router.use('/division', divisionRoutes)
router.use('/result', resultRoutes)
router.use('/salary', salaryRoutes)
router.use('/schedule', scheduleRoutes)
router.use('/student', studentRoutes)
router.use('/teacher', teacherRoutes)

module.exports = router