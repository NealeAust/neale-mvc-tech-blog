// Dependencies.
const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');

// At the homepage get all posts.
router.get('/', (req, res) => {
    Post.findAll({
        attributes: [
            'id',
            'post_text',
            'title',
            'created_at',
        ],
        // In descending order, latest date first and the earliest date last.
        order: [['created_at', 'DESC']],
        include: [
            {
                model: User,
                attributes: ['username']
            },
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            }
        ]
    })
    // Render the posts 
    .then(postData => {
        const posts = postData.map(post => post.get({ plain: true }));
        res.render('homepage', {
            posts,
            logged_in: req.session.logged_in
        });
    })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// At the homepage, get a single post.
router.get('/post/:id', (req, res) => {
    Post.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'post_text',
            'title',
            'created_at',
        ],
        include: [
            {
                model: User,
                attributes: ['username']
            },
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            }
        ]
    })
        .then(postData => {
            if (!postData) {
                res.status(404).json({ message: 'There is no post with this id' });
                return;
            }
            const post = postData.get({ plain: true });
            res.render('post', {
                post,
                logged_in: req.session.logged
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

//  Upon login redirect to the home page.
router.get('/login', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/');
        return;
    }
    res.render('login');
});

// Upon successful sign-up redirect to the home page.
router.get('/signup', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/');
        return;
    }
    res.render('signup');
});

// Export the router
module.exports = router;