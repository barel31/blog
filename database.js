const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
	title: { type: String, required: true },
	body: { type: String, required: true },
});

const Posts = mongoose.model('Posts', PostSchema);

module.exports = {
	connect: async () => {
		return await mongoose.connect('mongodb+srv://blog:blog@cluster0.jc46m.mongodb.net/blog');
	},
	addPost: async (title, body) => {
		return await new Posts({ title, body }).save();
	},
	findPostById: async (_id) => {
		return await Posts.findOne({ _id });
	},
	findAllPosts: async () => {
		return await Posts.find();
	},
	removeById: async (_id) => {
        return await Posts.deleteOne({ _id });
    },
};
