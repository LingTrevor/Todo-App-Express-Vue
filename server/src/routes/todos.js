const express = require('express');
const router = express.Router();
const TodoController = require('../controllers/TodoController');

router.get("/todos:limit?",TodoController.allTodos);
router.post("/todos/add", TodoController.addTodo);
router.delete("/todos/delete/:id", TodoController.deleteTodo);
router.put("/todos/edit/:id", TodoController.editTodo);

module.exports = router;