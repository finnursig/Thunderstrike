import { Link } from 'react-router';
import axios from 'axios';

import Header from 'lib/Header';
import Layout from 'lib/Layout';

export default class App extends React.Component {

	render(){
		return(
			<div ref="test">
				<Header>
					{/*
					<Link to="/actions">Player Actions</Link>
					 */}
				</Header>

				<Layout>
					{/*
					<ul>
						<li></li>
						<li><Link to="/mapeditor">Map Editor</Link></li>
						<li></li>
					</ul>
					 */}

					{this.props.children}

				</Layout>
			</div>
		);
	}
}