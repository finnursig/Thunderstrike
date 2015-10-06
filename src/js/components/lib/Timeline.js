import './Timeline.less';

export default class Timeline extends React.Component {
	render(){

		return (
			<div className="timeline">
				<input ref="timeline" className="timeline__slider" type="range" min="0" max={this.props.data.length} defaultValue={this.props.data.length} onChange={this.onChange.bind(this)} />
			</div>
		)
	}

	onChange(){
		let value = this.props.data[this.refs.timeline.value - 1];

		this.props.onChange(value);
	}
}