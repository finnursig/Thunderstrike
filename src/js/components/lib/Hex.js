import './Hex.less';

const hexTypes = [
	{
		name: 'void',
		className: 'void'
	},
	{
		name: 'land',
		className: 'land'
	}
];

export default class Hex extends React.Component {
	render(){
		let className = 'hex';

		className += ` hex--${hexTypes[this.props.type].className}`;

		return (
			<div className={className} {...this.props}>
				<div className="hex__inner">
					<div className="hex__type">
						{this.props.type}
					</div>
					<div className="hex__position">
						{this.props.name}
					</div>
				</div>
			</div>
		);
	}
}