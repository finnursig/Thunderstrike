import { Route } from 'react-router';

export default (
	<Route component={require('./components/App')}>
		<Route path="/" component={require('./components/pages/Home')} />
		<Route path="/mapeditor" component={require('./components/pages/MapEditor')} />
		<Route path="/actions" component={require('./components/pages/Actions')} />
	</Route>
);