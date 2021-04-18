const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	entry: './src/chess.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.[hash].js',
	},
	plugins: [
		new htmlWebpackPlugin({
			template: './src/index.html',
		}),
		new CleanWebpackPlugin(),

	]
}