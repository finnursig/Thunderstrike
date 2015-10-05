class ActionStore {

	constructor(){
		this._data = [];

		this._data.push({
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
	}

	async all(){
		return this._data;
	}

}

export default new ActionStore();