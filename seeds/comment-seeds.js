const { Comment } = require('../models');

const commentData = [
    {
        user_id: 1,
        post_id: 1,
        comment_text: "What a great game and I love the pictures."
    },
    {
        user_id: 4,
        post_id: 1,
        comment_text: "I love the hulk."
    },
    {
        user_id: 2,
        post_id: 4,
        comment_text: "A very useful tool."
    },
    {
        user_id: 3,
        post_id: 4,
        comment_text: "Melbourne 4 seasons in one day"
    },
    {
        user_id: 5,
        post_id: 5,
        comment_text: "Great team builder."
    },
    {
        user_id: 4,
        post_id: 6,
        comment_text: "I can never remember my password."
    },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;