import express from 'express';
import Board from './models/BoardModel';
import Action from './models/ActionModel';

let router = express.Router();

router.get('/api/board', function(req, res){
	Board.find({})
		.then(function(board){
			res.send(board);
		});
});



export default router;