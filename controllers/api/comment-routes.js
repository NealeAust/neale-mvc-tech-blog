// Dependencies
const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// Find all comments
router.get('/', async (req, res) => {
    try {
        const commentData = await Comment.findAll({});
        if (commentData.length === 0) {
            res
                .status(404)
                .json({ message: 'A search of our database failed to find any commen' });
            return;
        }
        res.status(200).json(commentData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Find a single comment.
router.get('/:id', async (req, res) => {
    try {
        const commentData = await Comment.findAll({
            where: { id: req.params.id },
        });
        if (commentData.length === 0) {
            res
                .status(404)
                .json({ message: `There is no comment with id: ${req.params.id}` });
            return;
        }
        res.status(200).json(commentData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Add a new comment.
router.post('/', withAuth, async (req, res) => {
    try {
        const newComment = await Comment.create({
            ...req.body, user_id: req.session.user_id,
        });
        res.status(200).json(newComment);
    } catch (err) {
        res.status(400).json(err);
    }
});

// Update a comment.
router.put('/:id', withAuth, async (req, res) => {
    try {
        const updatedComment = await Comment.update(
            {
                comment_text: req.body.comment.text,
            },
            {
                where: {
                    id: req.params.id,
                },
            });
        if (!updatedComment) {
            res
                .status(404)
                .json({ message: `No comment found with id: ${req.params.id}` });
            return;
        }
        res.status(200).json(updatedComment);
    } catch (err) {
        res.status(400).json(err);
    }
});

// Delete a comment.
router.delete('/:id', withAuth, async (req, res) => {
    try {
        const commentData = await Comment.destroy({
            where: {
                id: req.params.id,
            },
        });
        if (!commentData) {
            res
                .status(404)
                .json({ message: `There is no longer a post made by user_id: ${req.session.user_id} with id: ${req.params.id}` });
            return;
        }
        res.status(200).json(commentData);
    } catch (err) {
        res.status(400).json(err);
    }
});

// Export the router
module.exports = router;