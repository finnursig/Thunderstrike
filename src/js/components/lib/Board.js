import './Board.less';
import find from 'lodash/collection/find';
import { board as boardData } from '../../data';

export default class Board extends React.Component {

	render(){
		let size = this.props.size;

		return (
			<div className="board">
				<div className="board__inner">
					{React.Children.map(this.props.children, (hex, index) => {
						let y = Math.floor(index / size);
						let x = (index % size);

						let top = 76 * y + 40;
						let left = 101 * x + (y % 2 === 1 ? 50 : 0);

						let meta = {};

						if(x === 1 && y === 2){
							meta.player = 'Þórir';
						}

						if(x === 7 && y === 2){
							meta.player = 'Björn';
						}

						if(x === 1 && y === 6){
							meta.player = 'Finnur';
						}

						if(x === 7 && y === 6){
							meta.player = 'Magnús';
						}

						return React.cloneElement(hex, {
							name: `${y}-${x}`,
							meta,
							style: {
								top: top,
								left: left
							}
						})
					})}
				</div>
			</div>
		);
	}

	render2(){
		let comps = {};


		let items = this.props.children.map((component, i) => {
			return {
				id: component.props.id,
				positions: component.props.positions,
				component
			};
		});


		let first = items[0];

		first.top = 500;
		first.left = 500;

		let children = this.getChildren(first, items);

		//console.log(children);

		return (
			<div className="board">
				{children.map((item, i) => {
					return React.cloneElement(item.component, {
						style: {
							top: item.top,
							left: item.left
						}
					})
				})}
			</div>
		);
	}

	getChildren(item, arr){
		let b = [];

		for(let i = 0; i < item.positions.length; i++) {
			let found = find(arr, (a) => {
				return a.id === item.positions[i] && a.done !== true;
			});

			//console.log('found', found);

			if(found){
				found.done = true;
				found.top = item.top + 50;
				found.left = item.left + 50;

				switch(i) {
					case 0:
						found.top = item.top - 76;
						found.left = item.left - 51;
						break;

					case 1:
						found.top = item.top - 76;
						found.left = item.left + 51;
						break;

					case 2:
						found.top = item.top;
						found.left = item.left - 101;
						break;

					case 3:
						found.top = item.top;
						found.left = item.left + 101;
						break;

					case 4:
						found.top = item.top + 76;
						found.left = item.left - 51;
						break;

					case 5:
						found.top = item.top + 76;
						found.left = item.left + 51;
						break;
				}


				b.push(found);
				b = b.concat(this.getChildren(found, arr));
			}
		}

		return b;
	}

	getFirst(positions){
		let component;

		for(let i = 0; i < positions.length; i++){
			for(let j = 0; j < boardData.length; j++){
				if(boardData[j].id === positions[i]){
					component = boardData[j];
					break;
				}
			}
		}

		for(let i = 0; i < positions.length; i++){
			for(let key in components) {
				if(key === positions[i]){
					component = components[key];
					break;
				}
			}
		}

		return {
			top: component.top + 100,
			left: component.left + 100
		}
	}
}