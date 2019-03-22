const express = require('express');
const router = express.Router();
const TodoController = require('../controllers/TodoController');

router.get("/todos",TodoController.allTodos);
router.post("/todos/add", TodoController.addTodo);

module.exports = router;