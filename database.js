const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
	title: { type: String, required: true },
	body: { type: String, required: true },
});

const Posts = mongoose.model('Posts', PostSchema);

module.exports = {
	connect: () => {
		return mongoose.connect('mongodb://localhost:27017/blog');
	},
	addPost: async (title, body) => {
		const post = new Posts({ title, body });
		await post.save();
	},
	findPostById: async (_id) => {
		const post = await Posts.findOne({ _id });
		return post;
	},
	findAllPosts: async () => {
		return await Posts.find();
	},
};
