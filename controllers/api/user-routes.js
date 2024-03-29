// Dependencies
const router = require('express').Router();
const { User, Post, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// Get all users.
router.get('/', async (req, res) => {
    try {
        const userData = await User.findAll({
            attributes: { exclude: ['password'] },
        });
        res.status(200).json(userData);
    } catch (err) {
        res.status(400).json(err);
    }
});

// Get a single user by id.
router.get('/:id', async (req, res) => {
    try {
        const userData = await User.findOne({
            attributes: { exclude: ['password'] },
            where: { id: req.params.id },
            include: [
                {
                  model: Post,
                  attributes: ['id', 'title', 'post_text', 'created_at'],
                },
                {
                  model: Comment,
                  attributes: ['id', 'comment_text', 'created_at'],
                  include: {
                    model: Post,
                    attributes: ['title'],
                  },
                },
                {
                   model: Post,
                   attributes: ['title'],
                },
            ],
        });
        console.log(userData);
        if (!userData) {
            res.status(404).json({ message: `The user id ${req.params.id} doesot exist` });
            return;
        }
        res.status(200).json(userData);
    } catch (err) {
        res.status(400).json(err);
    }
});

// Add a new user.
router.post('/', async (req, res) => {
    try {
        const userData = await User.create(req.body);
        console.table(req.body);
        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.username = userData.username;
            req.session.logged_in = true;
            res
                .status(201)
                .json({ message: `Your post has been created! ${userData.username}` });
        });
    } catch (err) {
        console.log(err)
        res.status(400).json(err);        
    }
});

// Login to application
router.post('/login', async (req, res) => {
    try {
        const userData = await User.findOne({
            where: { username: req.body.username },
        });
        if (!userData) {
            res
               .status(400)
               .json({ message: `${req.body.username} is not a valid username` });
            return;
        }

        const validPassword = await userData.checkPassword(req.body.password);

        if (!validPassword) {
            res.status(400).json({ message: 'The password is incorrect, please try again' });
            return;
        }

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.username = userData.username;
            req.session.logged_in = true;

            res.json({ user: userData, message: 'Welcome to The Tech Blog!!' });
        });
    } catch (err) {
        res.status(400).json(err);
    }
});

// Logout of application
router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

// Delete an existing user 
router.delete('/:id', withAuth, (req, res) => {
    User.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(userData => {
            if (!userData) {
                res.status(404).json({ message: 'This id does not exist' });
                return;
            }
            res.json(userData);
        })
        .catch(err => {
            console.log(err)
            res.status(500).json(err)
        });
});

module.exports = router;