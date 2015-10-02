import axios from 'axios';

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

	componentDidMount(){

		Actions.fetchData()
			.then((res) => {
				this.setState({
					data: res.data
				});
			});

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
								<td>{action.name}</td>
							</tr>
						);
					})}
					</tbody>
				</table>
			</div>
		);
	}
}