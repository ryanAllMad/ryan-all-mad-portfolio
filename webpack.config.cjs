const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
	mode: 'production',
	entry: {
		index: [
			__dirname + '/views/index.js',
			__dirname + '/assets/styles.css'
		]
	},
	output: {
		path: __dirname + '/public',
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
			{
				test: /\.css$/i,
				use: [MiniCssExtractPlugin.loader, 'css-loader'],
			},
		],
	},
	optimization: {
		minimizer: [
			new CssMinimizerPlugin(),
		]
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: '[name].bundle.css',
		}),
	],
};
