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
			[0,0,1,1,4,1,1,0,0],
			[0,1,2,1,1,2,1,0,0],
			[0,1,1,1,5,1,1,1,0],
			[1,1,3,1,1,3,1,1,0],
			[4,1,1,1,6,1,1,1,4],
			[1,1,3,1,1,3,1,1,0],
			[0,1,1,1,5,1,1,1,0],
			[0,1,2,1,1,2,1,0,0],
			[0,0,1,1,4,1,1,0,0]
		];

		return board.save();
	})
	.then(() => {
		console.log('done');
	});