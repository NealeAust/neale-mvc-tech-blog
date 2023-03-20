const { Post } = require('../models');

const postData = [
    {
        title: "Superhero Smackdown",
        post_content: "A browser-based frontend application showcasing Marvel Superheros in battle, displaying the winner and a battle history.",
        user_id: 1
    },
    {
        title: "MixMate",
        post_content: "A music playlist creation and sharing platform web application.",
        user_id: 4
    },
    {
        title: "Note Taker",
        post_content: "An easy to use web application for writing and saving notes; which can also be deleted or cleared before being saved.",
        user_id: 3
    },
    {
        title: "Weather Dashboard",
        post_content: "A web application that provides a visual tool for displaying current and (5 day) forecast weather information.",
        user_id: 5
    },
    {
        title: "Team Profile Generator",
        post_content: "An easy-to-use command-line application that enables the user to create team members and their profiles.",
        user_id: 6
    },
    {
        title: "Password Generator",
        post_content: "A random password generator that automatically generates a strong and unpredictable password in accordance with parameters entered.",
        user_id: 2
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;