import Board from 'lib/Board';
import Hex from 'lib/Hex';

import { board as boardData } from '../../data';

export default class Home extends React.Component {
	render(){
		return(
			<div>
				<h2>Board</h2>

				<Board>
					{boardData.map(item => {
						return (
							<Hex key={item.id} id={item.id} name={item.name} positions={item.position} />
						);
					})}
				</Board>
			</div>
		);
	}
}