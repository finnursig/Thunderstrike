import mongoose, { Schema } from 'mongoose';

var actionSchema = new Schema({
	name: String,
	created: { type: Date, default: Date.now }
});

export default mongoose.model('Action', actionSchema);