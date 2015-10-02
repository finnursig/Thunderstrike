import { Link } from 'react-router';
import Header from 'lib/Header';
import Layout from 'lib/Layout';
import Scoreboard from 'lib/Scoreboard';

export default class App extends React.Component {
	static fetchData() {
		return new Promise((resolve) => {

			setTimeout(resolve, 0);

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