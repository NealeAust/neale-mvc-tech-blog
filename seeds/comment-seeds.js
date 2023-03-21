const { Comment } = require('../models');

const commentData = [
    {
        user_id: 1,
        post_id: 3,
        comment_text: "Linking up Modules, Routes, Seeds, Handlebars etc is challenging."
    },
    {
        user_id: 4,
        post_id: 1,
        comment_text: "Good quality comments are very helpful."
    },
    {
        user_id: 2,
        post_id: 4,
        comment_text: "Be very careful to include opening and closing brackets."
    },
    {
        user_id: 3,
        post_id: 4,
        comment_text: "Errors not necessarily a logic problem that requires changing the code, it could be an error in the pathway in dependencies"
    },
    {
        user_id: 5,
        post_id: 5,
        comment_text: "Hashing passwords is clever."
    },
    {
        user_id: 4,
        post_id: 5,
        comment_text: "There are multiple steps that can be taken to minimise syntax erros in your coding."
    },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;