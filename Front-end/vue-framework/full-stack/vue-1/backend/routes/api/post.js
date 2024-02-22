
const express = require('express');
const router = express.Router();
const { postsList, addPost, singlePost, deletePost, updatePost } = require('../../controllers/Post')


// Define your routes
router.get('/', postsList);
router.get('/:id', singlePost);
router.post('/', addPost);
router.delete('/:id', deletePost);
router.put('/:id', updatePost);

module.exports = router;