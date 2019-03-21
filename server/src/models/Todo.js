const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    isDone: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('Todos', TodoSchema);
