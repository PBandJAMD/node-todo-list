const express = require('express');
const router = express.Router();
const TodoController = require('./todo.controllers');

router
  .route('/todos')
  .get(TodoController.all)
  .post(TodoController.new);

router
  .route('/todos/:id')
  .get(TodoController.show)
  .put(TodoController.update)
  .delete(TodoController.delete);

module.exports = router;
