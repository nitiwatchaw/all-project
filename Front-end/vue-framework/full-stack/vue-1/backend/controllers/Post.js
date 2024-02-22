const Post = require('../models/Post')

exports.postsList = async (req, res) => {
    try {
        const postList = await Post.find().exec()
        res.send(postList)

    }
    catch (error) {
        console.log(error)
        res.status(500).send('Server Erorr')
    }
}

exports.singlePost = async (req, res) => {
    try {
        const postId = req.params.id;
        const post = await Post.findById(postId);

        if (!post) {
            return res.status(404).json({ message: "Post not found" });
        }

        res.send(post);
    } catch (error) {
        console.log(error);
        res.status(500).send('Server Error');
    }
};

exports.addPost = async (req, res) => {
    try {
        console.log(req.body)
        const savedPost = await Post(req.body).save();
        res.send(savedPost)

    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
};


exports.deletePost = async (req, res) => {
    try {
        const postId = req.params.id;
        const deletePost = await Post.findOneAndDelete({ _id: postId }).exec()
        res.send(deletePost)
        res.send('delete already')
    }
    catch (error) {
        console.log(error)
    }
}

exports.updatePost = async (req, res) => {
    try {
        const postId = req.params.id;
        const updatedPost = await Post.findOneAndUpdate(
            { _id: postId },
            req.body,
            { new: true }
        ).exec();

        if (!updatedPost) {
            return res.status(404).json({ message: "Post not found" });
        }

        res.send(updatedPost);
    } catch (error) {
        console.log(error);
        res.status(500).send('Server Error');
    }
};
