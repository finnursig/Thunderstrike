import './layout.less';
import { Link } from 'react-router';

export default class Layout extends React.Component {

	render(){
		return (
			<div className="layout">
				{this.props.children}
			</div>
		);
	}

}