import './Timeline.less';

export default class Timeline extends React.Component {
	render(){
		return (
			<div className="timeline">
				<input className="timeline__slider" type="range" min="0" max="10" defaultValue="10"  />
			</div>
		)
	}
}