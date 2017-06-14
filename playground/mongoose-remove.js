const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
// 	console.log(result);
// });

// Todo.findOneAndRemove
// Todo.findByIdAndRemove

Todo.findOneAndRemove({text: 'Hello'}).then((todo) => {
	console.log(todo);
});

// Todo.findByIdAndRemove('5941b1f5c86defa070e6d8b3').then((todo) => {
// 	console.log(todo);
// });