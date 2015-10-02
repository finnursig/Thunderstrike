import './Header.less';
import { Link } from 'react-router';


export default class Header extends React.Component {

	render(){
		return (
			<header className="header">
				<Link to="/">Thunderstrike</Link>
			</header>
		);
	}

}