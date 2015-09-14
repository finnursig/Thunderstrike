export default class App extends React.Component {
	render(){
		return(
			<div>
				<h1>THUNDERSTRIKE!</h1>

				{this.props.children}
			</div>
		);
	}
}