// File gathers the API routes and exports them for use.

// Dependencies
const router = require('express').Router();
const userRoutes = router('./user-routes');
const postRoutes = require('/post-routes');
const commentRoutes = require('./comment-routes');

// Define route path for API to use.
router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);

// Export the router
module.exports = router;
