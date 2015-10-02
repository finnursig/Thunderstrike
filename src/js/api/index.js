import express from 'express';
import Board from './models/BoardModel';
import Action from './models/ActionModel';

let router = express.Router();

router.get('/board', function(req, res){
	Board.findOne({
		_id: '55fa2644b31c74181cb4a10f'
	})
		.then(function(board){
			res.send(board);
		});
});

router.get('/action', function(req, res){
	Action.find({})
		.then(function(board){
			res.send(board);
		});
});

export default router;


Board.findOne({
	_id: '55fa2644b31c74181cb4a10f'
})
	.then((board) => {
		board.grid = [
			[ 1, 2, 3, 4, 5, 6],
			[ 7, 8, 9,10,11,12],
			[13,14,15,16,17,18],
			[19,20,21,22,23,24]
		];

		return board.save();
	})
	.then(() => {
		console.log('done');
	});