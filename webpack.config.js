var path = require('path');
var webpack = require('webpack');

module.exports = {
	debug: true,
	devtool: 'eval',

	entry: [
		'webpack-hot-middleware/client',
		'./src/js/client.js'
	],

	output: {
		//publicPath: 'http://localhost:8080/assets/',
		publicPath: '/dev/',
		path: path.join(__dirname, 'public', 'assets'),
		filename: '[name].bundle.js',
		sourceMapFilename: '[name].map'
	},

	module: {
		loaders: [
			{
				test: /\.less/,
				loader: 'style!css!autoprefixer!less'
				//loader: ExtractTextPlugin.extract('style-loader!css-loader!autoprefixer-loader!less-loader')
			},
			{
				test: /\.html$/,
				loader: 'ejs-loader'
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel'
			}
		]
	},

	resolve: {
		modulesDirectories: ['web_modules', 'node_modules', 'less', './src/js/components'],
		extensions: ['', '.js', '.less']
	},

	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin(),
		new webpack.ProvidePlugin({
			React: 'react',
			$: 'jquery'
		})
	]
};