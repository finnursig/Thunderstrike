import { Router, Route } from 'react-router';
import 'main.less';

React.render((
	<Router>
		<Route component={require('./components/App')}>
			<Route path="/" component={require('./components/pages/Home')}/>
		</Route>
	</Router>
), document.body);