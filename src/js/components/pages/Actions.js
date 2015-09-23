import axios from 'axios';

export default class Actions extends React.Component {

	static fetchData(){
		return axios.get('/api/action');
	}

	render(){
		return (
			<div>
				<h2>Player Actions</h2>
			</div>
		);
	}
}