const { Task } = require('../model/model.js');
// const { locals } = require('../server.js');
const databaseController = {};

databaseController.getTasks = async (req, res, next) => {
  //query our database for all tasks 
  try {
    const allTasksDocs = await Task.find({}).exec();
    // console.log(allTasksDocs[0].dueDate);
    // console.log(typeof allTasksDocs[0].dueDate);
    res.locals.allTasks = [...allTasksDocs];
    return next();
  } catch(error){
    return next({
      Message: 'Unable to find your tasks',
      ErrorProduced: error
    })
  }
};

databaseController.createTask = async(req, res, next) => {
  console.log('Inside CreateTask', req.body);
  const { taskLabel, dueDate } = req.body;
  const newTask = {taskLabel, dueDate};
  console.log(newTask);
  try {
    await Task.create(newTask);
    return next();
    // console.log()
  } catch(error) {
    console.log(error);
    return next({
      Message: 'Unable to post your task',
      ErrorProduced: error,
    })
  }
};

module.exports = databaseController;