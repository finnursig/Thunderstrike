var mongoose = require('mongoose');

var boardSchema = new mongoose.Schema({
	name: String,
	created: { type: Date, default: Date.now }
});

export default mongoose.model('Board', boardSchema);