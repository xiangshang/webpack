const merge = require('webpack-merge');
const common = require('./webpack.common.js');
module.exports = merge(common, {
	devtool: 'eval-source-map',
	devServer: {
		contentBase: './dist',
		hot: true
	},
	
})
