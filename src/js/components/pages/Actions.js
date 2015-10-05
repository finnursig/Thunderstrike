import axios from 'axios';
import DesignAction from 'lib/DesignAction';

import actionStore from 'stores/actionStore';

export default class Actions extends React.Component {

	static fetchData(){
		return axios.get('/api/action');
	}

	constructor(){
		super(...arguments);

		this.state = {
			data: []
		};
	}

	async componentDidMount(){

		try {
			let actions = await actionStore.all();

			this.setState({
				data: actions
			});

		} catch(e){
			console.log(e);
		}

		//Actions.fetchData()
		//	.then((res) => {
		//		this.setState({
		//			data: res.data
		//		});
		//	});

	}

	render(){
		console.log('state', this.state);

		return (
			<div>
				<h2>Player Actions</h2>

				<table>
					<thead>
						<tr>
							<th>ID</th>
							<th>Name</th>
						</tr>
					</thead>

					<tbody>
					{this.state.data.map((action) => {
						return (
							<tr>
								<td>{action._id}</td>
								<td>{action.attacker.player}</td>
								<td>{action.defender.player}</td>
							</tr>
						);
					})}
					</tbody>
				</table>

				<DesignAction type="new" />
			</div>
		);
	}
}