import axios from 'axios';
import Textarea from 'lib/Textarea';

export default class DesignAction extends React.Component {

	render(){
		return (
			<div>
				<Textarea ref="textarea" />

				<button onClick={this.onSaveClick.bind(this)}>Save</button>
			</div>
		);
	}

	onSaveClick(){
		console.log(this.refs.textarea);

		//axios.post();
	}

}