const path = require('path');

module.exports = {
	mode: 'production',
	entry: {
		index: [__dirname + '/views/index.js'],
		main: [__dirname + '/controller/main.js']
	},
	output: {
		path: __dirname + '/public/js',
		filename: '[name].bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.(?:js)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [['@babel/preset-env', { targets: 'defaults' }]],
					},
				},
			},
		],
	}
};
