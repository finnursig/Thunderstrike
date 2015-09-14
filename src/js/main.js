import { Router, Route } from 'react-router';

React.render((
	<Router>
		<Route component={require('./components/App')}>
			<Route path="/" component={require('./components/pages/Home')}/>
		</Route>
	</Router>
), document.body);