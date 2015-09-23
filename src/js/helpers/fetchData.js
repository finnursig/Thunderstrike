export default (components) => {
	console.log('fetchData', components);

	let componentsWithFetch = components.filter((component) => {
		return component.fetchData !== undefined;
	});

	return Promise.all(componentsWithFetch.map(async (component) => {
		await component.fetchData();
	}));
};