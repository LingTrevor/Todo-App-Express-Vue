const Todo = require('../models/Todo');

module.exports = {
    async allTodos(req, res) {
        const limit = parseInt(req.query.limit);
        await Todo.find({}).limit(limit).sort({createdAt: 'desc'})
            .then(todos => {
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
                .then((todo) => {
                    console.log("Todo Saved to DB!");
                    console.log(todo);
                    // res.status(200).send({ success: "Todo Created" });
                    res.status(200).send(todo);
                })
                .catch(err => {
                    console.log(err);
                    res.status(500).send({ error: "Something went wrong :(" });
                });
        }
    },

    async deleteTodo(req, res) {
        console.log(req.params.id);
        await Todo.deleteOne({
            _id: req.params.id
        })
            .then(() => {
                console.log("Deleted");
                res.status(200).send({ success: 'Deleted' });
            })
            .catch((err) => {
                console.log(err);
                res.status(500).send({ error: "Something went wrong :(" });
            });
    },

    async editTodo(req, res) {
        const todoID = req.params.id;
        await Todo.findByIdAndUpdate(todoID)
            .then(todo => {
                todo.isDone = !todo.isDone;
                todo.save()
                    .then((todo) => {
                        res.status(200).send(todo);
                    })
                    .catch((err) => {
                        console.log(err);
                        res.status(500).send({ error: "Something went wrong :(" });
                    });
            });
    }
}
