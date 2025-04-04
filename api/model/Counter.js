import mongoose from 'mongoose';

const counterSchema = new mongoose.Schema({
	value: {
		type: Number,
		required: true,
		default: 0
	},
	updatedAt: {
		type: Date,
		default: Date.now
	}
});

export default mongoose.model('Counter', counterSchema);