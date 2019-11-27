const db = require('../../db');
const TodosModels = {};

TodosModels.GetAllTodos = async () => {
  return await db.manyOrNone('SELECT * FROM todos');
};

TodosModels.GetSingleTodo = async id => {
  return await db.manyOrNone('SELECT * FROM todos WHERE id = $1', [id]);
};

TodosModels.CreateNewTodo = async (subject, content) => {
  return await db.one(
    'INSERT INTO todos (subject, content) VALUES ($1, $2) returning id',
    [subject, content]
  );
};

module.exports = TodosModels;
