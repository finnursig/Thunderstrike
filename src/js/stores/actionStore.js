class ActionStore {

	constructor(){
		this._data = [];

		this._data.push({
			id: 0,
			won: false,
			major: true,
			attacker: {
				player: 'Þórir',
				from: [2,1],
				to: [2,2]
			},
			defender: {
				player: 'Finnur',
				from: [6,1],
				to: [6,2],
				extra: [6,3]
			}
		});

		this._data.push({
			id: 1,
			won: true,
			major: true,
			attacker: {
				player: 'Björn',
				from: [2,7],
				to: [2,6],
				extra: [2,5]
			},
			defender: {
				player: 'Magnús',
				from: [6,7],
				to: [6,6]
			}
		});

		this._data.push({
			id: 2,
			won: false,
			major: true,
			attacker: {
				player: 'Magnús',
				from: [6,7],
				to: [6,6],
				extra: [6,5]
			},
			defender: {
				player: 'Finnur',
				from: [6,2],
				to: [5,2],
				extra: [4,3]
			}
		});

		this._data.push({
			id: 3,
			won: false,
			major: false,
			attacker: {
				player: 'Þórir',
				from: [2,1],
				to: [3,0],
				extra: [2,2]
			},
			defender: {
				player: 'Björn',
				from: [2,5],
				to: [3,5],
				extra: [3,4]
			}
		});

		this._data.push({
			id: 4,
			won: false,
			major: true,
			attacker: {
				player: 'Þórir',
				from: [2,1],
				to: [2,2],
				extra: [2,3]
			},
			defender: {
				player: 'Magnús',
				from: [6,7],
				to: [6,6],
				extra: [6,5]
			}
		});

		this._data.push({
			id: 5,
			won: false,
			major: true,
			attacker: {
				player: 'Björn',
				from: [2,5],
				to: [2,4],
				extra: [3,4]
			},
			defender: {
				player: 'Finnur',
				from: [4,3],
				to: [4,4],
				extra: [7,3]
			}
		});

		this._data.push({
			id: 6,
			won: false,
			major: true,
			attacker: {
				player: 'Finnur',
				from: [7,3],
				to: [8,4],
				extra: [4,5]
			},
			defender: {
				player: 'Þórir',
				from: [2,1],
				to: [1,1],
				extra: [2,2]
			}
		});

		this._data.push({
			id: 7,
			won: true,
			major: false,
			attacker: {
				player: 'Magnús',
				from: [6,5],
				to: [5,5],
				extra: [5,4]
			},
			defender: {
				player: 'Þórir',
				from: [2,2],
				to: [1,2],
				extra: [2,3]
			}
		});

		this._data.push({
			id: 8,
			won: true,
			major: true,
			attacker: {
				player: 'Björn',
				from: [2,5],
				to: [1,5],
				extra: [3,7]
			},
			defender: {
				player: 'Magnús',
				from: [6,5],
				to: [7,5],
				extra: [5,4]
			}
		});

		this._data.push({
			id: 9,
			won: true,
			major: true,
			attacker: {
				player: 'Finnur',
				from: [6,3],
				to: [7,2],
				extra: [5,3]
			},
			defender: {
				player: 'Magnús',
				from: [6,5],
				to: [7,5],
				extra: [5,4]
			}
		});

		this._data.push({
			id: 10,
			won: true,
			major: false,
			attacker: {
				player: 'Björn',
				from: [3,7],
				to: [4,8],
				extra: [3,4]
			},
			defender: {
				player: 'Finnur',
				from: [5,3],
				to: [6,4],
				extra: [5,4]
			}
		});

		this._data.push({
			id: 11,
			won: false,
			major: true,
            attacker: {
                player: 'Þórir',
                from: [2,2],
                to: [1,2],
                extra: [2,3]
            },
			defender: {
				player: 'Björn',
				from: [2,5],
				to: [2,4],
				extra: [3,4]
			}
		});

		this._data.push({
			id: 12,
			won: true,
			major: true,
            attacker: {
                player: 'Finnur',
                from: [5,3],
                to: [6,4],
                extra: [5,4]
            },
			defender: {
                player: 'Þórir',
                from: [2,2],
                to: [1,2],
                extra: [2,3]
			}
		});

		this._data.push({
			id: 13,
			won: true,
			major: true,
            attacker: {
                player: 'Björn',
                from: [3,4],
                to: [4,4],
                extra: [3,3]
            },
			defender: {
                player: 'Finnur',
                from: [4,4],
                to: [3,5],
                extra: [4,5]
			}
		});
	}

	get all() {
		return this._data;
	}

	getScore(playerName, from){
		let score = 0;
		let grid = {};

		for(let x = 0; x < 9; x++){
			for(let y = 0; y < 9; y++){

				this._data.slice(0, from+1).forEach((action, i) => {
					let owner = null;

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

					if(owner)
						grid[`${y}-${x}`] = owner;
				});

			}
		}

		for(let key in grid){
			if(grid[key] === playerName){
				score++;
			}
		}

		return score;
	}

	getPlayerTurnCount(playerName, from){
		let turns = 0;

		this._data.slice(0, from+1).forEach((action, i) => {
			if(action.attacker.player === playerName || action.defender.player === playerName){
				turns++;
			}
		});

		return turns;
	}

}

export default new ActionStore();