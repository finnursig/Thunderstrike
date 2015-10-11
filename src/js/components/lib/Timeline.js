import './Timeline.less';

export default class Timeline extends React.Component {
	render(){

		return (
			<div className="timeline">
				<input ref="timeline"
				       className="timeline__slider"
				       type="range"
				       min="0"
				       max={this.props.data.length * 2}
				       defaultValue={this.props.data.length * 2}
				       onChange={this.onChange.bind(this)}
					/>
			</div>
		)
	}

	onChange(){
		let value = this.refs.timeline.value;
		let round = this.props.data[Math.ceil(value / 2) - 1];
		let phase = value % 2 ? 'planing' : 'resolution';

		this.props.onChange(round, phase);
	}
}