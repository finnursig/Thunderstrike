import './Hex.less';

const hexTypes = [
	{ //0
		name: 'void',
		className: 'void'
	},
	{ //1
		name: 'Land',
		className: 'land'
	},
	{ //2
		name: 'Communications Relay',
		className: 'relay',
		tooltip: 'May reroll one failed reserve roll per game'
	},
	{ //3
		name: 'Orbital Surveillance Link',
		className: 'orbital',
		tooltip: '+1 to Seize the Initiative'
	},
	{ //4
		name: 'Rapid response network',
		className: 'response',
		tooltip: 'Reroll the nightfighting dice'
	},
	{ //5
		name: 'Territorial Survey Station',
		className: 'survey',
		tooltip: '+1 to choosing a table edge'
	},
	{ //6
		name: 'Starport',
		className: 'starport',
		tooltip: 'Increases players attack range by one map quadrant'
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
					<div className="hex__name">
						{hexTypes[this.props.type].name}
					</div>
					<div className="hex__position">
						{this.props.name}
					</div>

					{hexTypes[this.props.type].tooltip ? (
						<div className="hex__tooltip">{hexTypes[this.props.type].tooltip}</div>
					) : null}


					{this.props.meta.player || this.props.owner ? (
						<div className="hex__homeworld">{this.props.meta.player || this.props.owner}</div>
					) : null}
				</div>
			</div>
		);
	}
}