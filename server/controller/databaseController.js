const { Task } = require('./model/model.js.js');
// const { locals } = require('../server.js');
const databaseController = {};

databaseController.getTasks = async (req, res, next) => {
  //query our database for all tasks 
  try {
    const allTasksDocs = await Task.find({}).exec();
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
  const { taskLabel, dateCreated, dueDate } = req.body;
  const newTask = {taskLabel, dateCreated, dueDate};
  try {
    await Task.create(newTask).exec();
  } catch(error) {
    return next({
      Message: 'Unable to find your tasks',
      ErrorProduced: error
    })
  }
};

