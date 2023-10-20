const { Post } = require('../models');

const post = async (req, res) => {
    try {
        const x = await new Post(req.body)
        await x.save()
        return res.status(201).json({
            x
        })
        } catch (e) {
            return res.status(500).send(e.message)
        }
    }
const editPost = async (req, res) => {
        try {
            const id = req.params.id
            const editPost = await Post.findByIdAndUpdate(id, req.body, { new: true })
            if (editPost) {
                return res.status(200).json(editPost)
            }
        } catch (e) {
            return res.status(500).send(e.message)
        }
    }
const deletePost = async (req, res) => {
    try {
        const id = req.params.id
        const postDelete = await Post.findByIdAndDelete(id)
        if (postDelete) {
            return res.status(200).send('Deleted a Post')
      }
        throw new Error("user is not registered")
    } catch (e) {
        return res.status(500).send(e.message)
    }
}
const viewPosts = async (req, res) => {
    try {
        const posts = await Post.find()
        res.json(posts)
        } catch (error) {
        return res.status(500).send(error.message);
    }
}
module.exports = {
    viewPosts,
    post,
    deletePost,
    editPost
}
