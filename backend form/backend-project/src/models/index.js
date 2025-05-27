// This file exports data models, which may include schemas for a database or other data structures used in the application.

export const UserModel = {
    name: String,
    email: String,
    password: String,
};

export const PostModel = {
    title: String,
    content: String,
    author: String,
};