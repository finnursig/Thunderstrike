var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();

mongoose.connect('mongodb://ts:foobar@ds055762.mongolab.com:55762/thunderstrike');

var boardSchema = new mongoose.Schema({
	name: String,
	created: { type: Date, default: Date.now }
	//title:  String,
	//author: String,
	//body:   String,
	//comments: [{ body: String, date: Date }],
	//date: { type: Date, default: Date.now },
	//hidden: Boolean,
	//meta: {
	//	votes: Number,
	//	favs:  Number
	//}
});

var actionSchema = new mongoose.Schema({
	created: { type: Date, default: Date.now },
	type: String,
	players: {
		attacker: String,
		defender: String
	},
	position: {
		from: String,
		to: String
	}
});

var Board = mongoose.model('Board', boardSchema);
var Action = mongoose.model('Action', actionSchema);

router.route('/board')
	.get(function(req, res){
		Board.find({})
			.then(function(board){
				res.send(board);
			});
	})
	.post(function(req, res){

	});

router.route('/action')
	.get(function(req, res){
		Action.find({})
			.then(function(arr){
				res.send(arr);
			});
	})
	.post(function(req, res){

	});

module.exports = router;