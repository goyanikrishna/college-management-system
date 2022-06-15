const express = require("express");
const router = express.Router();

const resultController = require("../Controllers/ResultController");

router.post('/add', (req, res) => resultController.result.add(req, res))
router.get('/get', (req, res) => resultController.result.get(req, res))
router.get('/getById', (req, res) => resultController.result.getById(req, res))
router.post('/update', (req, res) => resultController.result.update(req, res))
router.delete('/delete', (req, res) => resultController.result.delete(req, res))

module.exports = router