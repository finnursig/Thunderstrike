import './Scoreboard.less';
import actionStore from 'stores/actionStore';
import playerStore from 'stores/playerStore';

export default class Scoreboard extends React.Component {
	render(){
		return (
			<div className="scoreboard">
				<div className="scoreboard__title">
					Round: {this.props.round + 1} ({this.props.phase})
				</div>

				<table>
					<thead>
						<tr>
							<th>Player</th>
							<th>Score</th>
							<th>Turns</th>
						</tr>
					</thead>
					<tbody>
					{playerStore.all.map((player) => {
						return (
							<tr key={player.id}>
								<th>{player.name}</th>
								<td style={{ textAlign: 'center' }}>
									{actionStore.getScore(player.name, this.props.round)}
								</td>
								<td>
									{actionStore.getPlayerTurnCount(player.name, this.props.round)} / 10
								</td>
							</tr>
						);
					})}
					</tbody>
				</table>
			</div>
		);
	}
}