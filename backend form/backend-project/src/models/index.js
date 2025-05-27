// This file exports data models, which may include schemas for a database or other data structures used in the application.

const UserModel = {
    name: String,
    email: String,
    password: String,
};

const PostModel = {
    title: String,
    content: String,
    author: String,
};

const IndexController = require('../controllers');
const indexController = IndexController;

module.exports = { UserModel, PostModel };