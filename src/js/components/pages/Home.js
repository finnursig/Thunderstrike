import flatten from 'lodash/array/flatten';
import cloneDeep from 'lodash/lang/cloneDeep';
import findWhere from 'lodash/collection/findWhere';
import axios from 'axios';

import actionStore from 'stores/actionStore';

import Board from 'lib/Board';
import Hex from 'lib/Hex';
import Timeline from 'lib/Timeline';
import Scoreboard from 'lib/Scoreboard';

import { board as boardData } from '../../data';



function hexOwner({ x, y }, from, data = actionStore.all){
	if(from === undefined){
		return null;
	}

	let owner = undefined;

	data.slice(0, from+1).forEach(action => {
		let attackTo = action.attacker.to;
		let attackToExtra = action.attacker.extra;
		let defenderTo = action.defender.to;
		let defenderToExtra = action.defender.extra;

		if(action.won
			&& (
				(attackTo[0] === y && attackTo[1] === x)
				||
				(attackToExtra && attackToExtra[0] === y && attackToExtra[1] === x && action.major)
			)
		){
			owner = action.attacker.player;
		} else if(!action.won
			&& (
				(defenderTo[0] === y && defenderTo[1] === x)
				||
				(defenderToExtra && defenderToExtra[0] === y && defenderToExtra[1] === x && action.major)
			)
		){
			owner = action.defender.player;
		}
	});

	return owner;
}

function isUnderAttack(hex, round){
	//findWhere(actionStore.all, (hex) => {})
	let action = actionStore.all[round];

	if(!action){
		return false;
	}

	let attackingTo = action.attacker.to;
	let defendingTo = action.defender.to;

	return (
		(attackingTo[0] === hex.y && attackingTo[1] === hex.x)
		||
		(defendingTo[0] === hex.y && defendingTo[1] === hex.x)
	);
}


export default class Home extends React.Component {
	static fetchData() {
		return axios.get('/api/board');
	}

	constructor(){
		super(...arguments);

		this.state = {
			board: { grid: [] },
			round: actionStore.all.length - 1,
			phase: 'resolution'
		};
	}

	componentDidMount(){
		Home.fetchData()
			.then((res) => {
				this.setState({
					board: res.data
				});
			});
	}

	render(){
		let size = 0;

		if(this.state.board.grid && this.state.board.grid[0]){
			size = this.state.board.grid[0].length;
		}

		let grid = this.state.board.grid.map((row, y) => {
			return row.map((hex, x) => {

				return {
					type: hex,
					x,
					y
				};
			})
		});


		return(
			<div>
				<Timeline
					onChange={this.onTimelineChange.bind(this)}
					data={actionStore.all.map(action => action.id)}
					/>

				<Board size={size}>
					{flatten(grid).map((item, i) => {
						return (
							<Hex key={i}
							     type={item.type}
							     owner={hexOwner(item, this.state.phase === 'planing' ? this.state.round - 1 : this.state.round)}
							     isUnderAttack={isUnderAttack(item, this.state.round) && this.state.phase === 'planing'}
								/>
						);
					})}
				</Board>

				<Scoreboard round={this.state.round} phase={this.state.phase} />
			</div>
		);
	}

	onTimelineChange(value, phase){
		this.setState({
			round: value,
			phase
		})
	}
}