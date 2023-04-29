const User = require("../models/userModel");

// register admin 
exports.insertUser = async(req, res) => {
    try {

        res.status(200).json({
            message: "user register successfully",

        });
    } catch (error) {
        res.status(400).send(error);
    }
};

// const Comment = require('../models/comment');

// router.get('/poststories', async (req, res) => {
//   try {
//     const postStories = await PostStory.find();
//     const postStoriesWithComments = await Promise.all(postStories.map(async postStory => {
//       const comments = await Comment.find({ postId: postStory._id }).sort({ createdAt: -1 }).limit(5);
//       return { ...postStory.toJSON(), comments };
//     }));
//     res.json({ postStories: postStoriesWithComments });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// });