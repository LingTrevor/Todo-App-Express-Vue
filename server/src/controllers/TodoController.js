const Todo = require('../models/Todo');

module.exports = {
    async allTodos(req, res) {
        await Todo.find().then(todos => {
            res.status(200).send(todos);
        });
    },

    async addTodo(req, res) {
        const newTodo = {
            title: req.body.title
        };
        if (!newTodo.title) {
            res.status(400).send({ error: "Title required" });
        } else {
            const todo = await new Todo(newTodo);
            todo.save()
                .then(() => {
                    console.log("Todo Saved to DB!");
                    res.status(200).send({ success: "Todo Created" });
                })
                .catch(err => {
                    console.log(err);
                    res.status(500).send({ error: "Something went wrong :(" });
                });
        }
    }
}
