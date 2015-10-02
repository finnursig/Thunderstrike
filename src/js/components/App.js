import { Link } from 'react-router';
import axios from 'axios';

import Header from 'lib/Header';
import Layout from 'lib/Layout';
import Scoreboard from 'lib/Scoreboard';

export default class App extends React.Component {
	static fetchData() {
		return axios.get('/api/board');
	}

	constructor(){
		super(...arguments);

		this.state = {};
	}

	componentDidMount(){
		App.fetchData()
			.then((res) => {
				this.setState({
					board: res.data
				});

				console.log(res.data);
			});
	}

	render(){
		return(
			<div>
				<Header />

				<Layout>

					<ul>
						<li><Link to="/">Map</Link></li>
						<li><Link to="/mapeditor">Map Editor</Link></li>
						<li><Link to="/actions">Player Actions</Link></li>
					</ul>

					{this.props.children}

					<Scoreboard />

				</Layout>
			</div>
		);
	}
}