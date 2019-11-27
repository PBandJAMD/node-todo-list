const express = require('express');
const router = express.Router();
const TodoController = require('./todo.controllers');

// @ts-ignore
router
  .route('/todos')
  .get(TodoController.all)
  .post(TodoController.new);

router.route('/todos/:id').get(TodoController.show);

module.exports = router;
