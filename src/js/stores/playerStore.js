import { EventEmitter } from 'events';

class PlayerStore extends EventEmitter {

	constructor(){
		super(...arguments);

		this._data = [];

		this._data.push({
			id: 1,
			name: 'Þórir'
		});

		this._data.push({
			id: 2,
			name: 'Björn'
		});

		this._data.push({
			id: 3,
			name: 'Finnur'
		});

		this._data.push({
			id: 4,
			name: 'Magnús'
		});
	}

	get all() {
		return this._data;
	}
}

export default new PlayerStore();