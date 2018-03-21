const webpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');

const config = require('./webpack.config.js');
const options = {
	contentBase: './dist',
	hot: true,
	host: 'localhost',
	historyApiFallback: {
	  rewrites: [
//	    { from: /^\/$/, to: '/views/landing.html' },
//	    { from: /^\/subpage/, to: '/views/subpage.html' },
	    { from: /./, to: './dist/index.html' }
	  ]
	}
}

webpackDevServer.addDevServerEntrypoints(config, options);
const compiler = webpack(config);
const server = new webpackDevServer(compiler, options);

server.listen(5000, 'localhost', ()=>{
	console.log('xxxxxx 5000')
})
