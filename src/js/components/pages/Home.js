import { flatten } from 'lodash/array';
import axios from 'axios';

import Board from 'lib/Board';
import Hex from 'lib/Hex';

import { board as boardData } from '../../data';

export default class Home extends React.Component {
	static fetchData() {
		return axios.get('/api/board');
	}

	constructor(){
		super(...arguments);

		this.state = {
			board: []
		};
	}

	componentDidMount(){
		Home.fetchData()
			.then((res) => {
				this.setState({
					board: res.data
				});

				console.log(res.data);

				//this.forceUpdate();
			});
	}

	render(){
		let size = 0;

		if(this.state.board.grid){
			size = this.state.board.grid[0].length;
		}

		return(
			<div>
				<h2>Board</h2>

				<Board size={size}>
					{flatten(this.state.board.grid).map((item, i) => {
						return (
							<Hex key={i} type={item} />
						);
					})}
					{/*boardData.map(item => {
						return (
							<Hex key={item.id} id={item.id} name={item.name} positions={item.position} />
						);
					})*/}
				</Board>
			</div>
		);
	}
}