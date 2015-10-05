import './Header.less';
import { Link } from 'react-router';


export default class Header extends React.Component {

	render(){
		return (
			<header className="header">
				<Link className="header__logo" to="/">Thunderstrike</Link>

				<ul className="header__nav">
					{React.Children.map(this.props.children, (component, i) => {
						return (
							<li className="header__nav-item">
								{React.cloneElement(component, {
									className: 'header__nav-link'
								})}
							</li>
						);
					})}
				</ul>
			</header>
		);
	}

}