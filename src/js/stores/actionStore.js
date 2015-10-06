class ActionStore {

	constructor(){
		this._data = [];

		this._data.push({
			id: 0,
			won: false,
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

		//this._data.push({
		//	id: 2,
		//	won: true,
		//	attacker: {
		//		player: 'Magnús',
		//		from: [6,7],
		//		to: [5,6],
		//		extra: [4,6]
		//	},
		//	defender: {
		//		player: 'Þórir',
		//		from: [1,1],
		//		to: [3,0]
		//	}
		//});
	}

	get all() {
		return this._data;
	}

}

export default new ActionStore();