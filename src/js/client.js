require('babel-core/polyfill');

import 'main.less';
import routes from './routes';
import fetchData from './helpers/fetchData';

//import createLocation from 'history/lib/createLocation'
import createBrowserHistory from 'history/lib/createBrowserHistory';
import { Router, RoutingContext, match } from 'react-router';

import { render } from 'react-dom';
//import { renderToString } from 'react-dom/server';

//match({ routes, location }, (err, redirectLocation, renderProps) => {
//	console.log(err, redirectLocation, renderProps);
//
//	renderProps.components.forEach((component) => {
//		if(component === undefined || !component.fetchData){
//			return;
//		}
//
//		console.log(component.displayName, component.fetchData());
//	});
//
//	render(<RoutingContext {...renderProps}/>, document.getElementById('app'));
//});


//Router.run(routes, function(Handler, routerState) {
//	//renderState.Handler = Handler;
//	//renderState.routerState = routerState;
//	//
//	//render();
//});


function onUpdate(){
	//match({ routes, location }, (err, redirectLocation, renderProps) => {
	//	console.log('match', err, redirectLocation, renderProps);
	//
	//	fetchData(renderProps.components)
	//		.then(() => {
	//			console.log('done with fetch');
	//		});
	//});
}


//renderProps.components.forEach((component) => {
//	if(component === undefined || !component.fetchData){
//		return;
//	}
//
//	console.log(component.displayName, component.fetchData());
//});
//});

render(<Router onUpdate={onUpdate} history={createBrowserHistory()} routes={routes} />, document.getElementById('app'));







