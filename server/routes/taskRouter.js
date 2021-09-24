const express = require('express');
const { restart } = require('nodemon');
const router = express.Router();
const { getTasks, createTask } = require('../controller/databaseController')


router.get('/getTasks', (req, res) => {
  return res.status(200).json([...res.locals.allTasks]);
})

router.post('/createTask', (req, res) => {
  return res.status(200).json('Your task is created!');
})

module.exports = router;