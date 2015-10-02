var mongoose = require('mongoose');

var boardSchema = new mongoose.Schema({
	name: String,
	created: { type: Date, default: Date.now },
	grid: []
});

export default mongoose.model('Board', boardSchema);