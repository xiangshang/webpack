const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
	entry:  path.resolve(__dirname, 'src/entry/index.js'),
	output: {
		filename: '[name].bundle.js',
		path:path.resolve(__dirname, 'dist'),
		chunkFilename: '[name].bundle.js'
//		publicPath: '/'
	},
	plugins:[
		new CleanWebpackPlugin(['dist']),
		new HtmlWebpackPlugin({
			template: 'template/index.html',
			title: 'Output Managements'
		}),
	],
	module: {
		rules:[
		{
			test: /\.css$/,
			use: [
				'style-loader',
				'css-loader'
			]
			
		},
		{
			test:/\.(gif|png|jpg|jpeg)$/i,
			use: [
				'file-loader',{
					loader:'image-webpack-loader',
					options:{
						bypassOnDebug:true,
					}
				}
			]
		},
		{
			test: /\.js$/i,
			exclude: /(node_modules|bower_components)/,
			loaders: ['babel-loader'],
		}
		]
	}
	
}
