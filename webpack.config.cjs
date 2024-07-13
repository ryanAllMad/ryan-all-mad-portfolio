const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
	mode: 'production',
	entry: {
		index: [
			__dirname + '/views/index.js',
			__dirname + '/assets/styles.css',
		],
	},
	output: {
		path: __dirname + '/public',
		filename: '[name].bundle.js',
		assetModuleFilename: 'images/[name][ext][query]',
	},
	module: {
		rules: [
			{
				test: /\.(?:js)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							['@babel/preset-env', { targets: 'defaults' }],
						],
					},
				},
			},
			{
				test: /\.css$/i,
				use: [MiniCssExtractPlugin.loader, 'css-loader'],
			},
			{
				test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
				type: 'asset',
			},
			{
				test: /\.html$/i,
				use: [
					{
						loader: 'html-loader',
					},
				],
			},
			{
				test: /\.(mov|mp4)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
						},
					},
				],
			},
		],
	},
	resolve: {
		alias: {
			'/assets/images/[name].png': path.resolve(
				__dirname,
				'public/images/[name].png'
			),
			'/assets/images/[name].mp4': path.resolve(
				__dirname,
				'public/images/[name].mp4'
			),
		},
	},
	optimization: {
		minimizer: [new CssMinimizerPlugin()],
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: '[name].bundle.css',
		}),
	],
};
