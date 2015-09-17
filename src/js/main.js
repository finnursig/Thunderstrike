import { Router, Route } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import 'main.less';

React.render((
	<Router history={createBrowserHistory()}>
		<Route component={require('./components/App')}>
			<Route path="/" component={require('./components/pages/Home')} />
			<Route path="/mapeditor" component={require('./components/pages/MapEditor')} />
			<Route path="/actions" component={require('./components/pages/Actions')} />
		</Route>
	</Router>
), document.body);