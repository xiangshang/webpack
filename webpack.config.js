const path= require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
module.exports = {
	entry:  path.resolve(__dirname, 'src/entry/index.js'),
	output: {
		filename: '[name].bundle.js',
		path:path.resolve(__dirname, 'dist'),
//		publicPath: '/'
	},
	devtool: 'eval',
	devServer: {
		contentBase: './dist',
		hot: true
	},
	plugins:[
		new CleanWebpackPlugin(['dist']),
		new HtmlWebpackPlugin({
			template: 'template/index.html',
			title: 'Output Managements'
		}),
		new UglifyJSPlugin({
			sourceMap: true 
		}),
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin()
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
