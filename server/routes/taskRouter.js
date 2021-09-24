const express = require('express');
const router = express.Router();
const { getTasks, createTask } = require('../controller/databaseController')


router.get('/getTasks', getTasks, (req, res) => {
  return res.status(200).json([...res.locals.allTasks]);
})

router.post('/createTask', createTask, (req, res) => {
  return res.status(200).json('Your task is created!');
})

module.exports = router;