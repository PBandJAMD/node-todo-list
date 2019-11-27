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
    const id = req.params.id;
    const findSingleTodo = await TodosModels.GetSingleTodo(id);
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

module.exports = TodoController;
