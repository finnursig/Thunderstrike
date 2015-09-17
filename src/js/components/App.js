import { Link } from 'react-router';
import Scoreboard from 'lib/Scoreboard';

export default class App extends React.Component {
	render(){
		return(
			<div>
				<h1>THUNDERSTRIKE!</h1>

				<ul>
					<li><Link to="/">Map</Link></li>
					<li><Link to="/mapeditor">Map Editor</Link></li>
					<li><Link to="/actions">Player Actions</Link></li>
				</ul>

				{this.props.children}

				<Scoreboard />
			</div>
		);
	}
}