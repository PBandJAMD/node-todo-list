const TodosModels = require('./todo.models');
const TodoController = {};

TodoController.all = async (req, res) => {
  try {
    const findAllTodos = await TodosModels.GetAllTodos();
    return res
      .status(200)
      .json({ data: findAllTodos, msg: 'List of All Todos' });
  } catch (err) {
    console.error('ERROR:', err);
    res.status(400).end();
  }
};

TodoController.show = async (req, res) => {
  try {
    const findSingleTodo = await TodosModels.GetSingleTodo(req.params.id);
    if (!findSingleTodo) {
      return res.status(400).end();
    }
    return res.status(200).json({ data: findSingleTodo, msg: ' Single Todo' });
  } catch (err) {
    console.error('ERROR:', err);
    res.status(400).end();
  }
};

TodoController.new = async (req, res) => {
  try {
    const newTodo = {
      subject: req.body.subject,
      content: req.body.content
    };
    const createNewTodo = await TodosModels.CreateNewTodo(
      newTodo.subject,
      newTodo.content
    );
    return res
      .status(200)
      .json({ data: createNewTodo, msg: 'New instance of todos' });
  } catch (err) {
    console.error('ERROR:', err);
    res.status(400).end();
  }
};

TodoController.update = async (req, res) => {
  try {
    const updateTodo = {
      subject: req.body.subject,
      content: req.body.content,
      id: req.params.id
    };
    const updateSingleTodo = await TodosModels.UpdateTodo(
      updateTodo.subject,
      updateTodo.content,
      updateTodo.id
    );
    if (!updateSingleTodo) {
      return res.status(400).end();
    }
    return res
      .status(200)
      .json({ data: updateSingleTodo, msg: ' Updates Todo' });
  } catch (err) {
    console.error('ERROR:', err);
    res.status(400).end();
  }
};

TodoController.delete = async (req, res) => {
  try {
    const deleteSingleTodo = await TodosModels.DeleteTodo(req.params.id);
    if (!deleteSingleTodo) {
      return res.status(400).end();
    }
    return res
      .status(200)
      .json({ data: deleteSingleTodo, msg: ' delete Todo' });
  } catch (err) {
    console.error('ERROR:', err);
    res.status(400).end();
  }
};

module.exports = TodoController;
