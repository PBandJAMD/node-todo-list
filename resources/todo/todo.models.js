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

TodosModels.UpdateTodo = async (subject, content, id) => {
  return await db.one(
    'UPDATE todos SET subject = $1, content = $2 WHERE id = $3 returning id',
    [subject, content, id]
  );
};

TodosModels.DeleteTodo = async id => {
  return await db.none('DELETE FROM todos WHERE id = $1', [id]);
};

module.exports = TodosModels;
