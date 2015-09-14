import './Hex.less';

export default class Hex extends React.Component {
	render(){
		return (
			<div className="hex" {...this.props}>
				<div className="hex__inner">
					{this.props.name}
				</div>
			</div>
		);
	}
}