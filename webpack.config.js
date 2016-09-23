const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
var projectRoot = path.resolve(__dirname, '../');
module.exports = {
	entry:{
		index:'./src/js/page/index/main.js',
		profit:'./src/js/page/profit/main.js'
	},
	output:{
		path:path.join(__dirname,'dist'),
		publicPath:'../',
		filename:'[name].js'
	},
	module:{
		loaders:[
			{
				test:/\.vue$/,
				loader:'vue',
				include:projectRoot,
		        exclude: /node_modules/
			},
			{
				test:/\.json$/,
				loader:'json',
				include:projectRoot,
				exclude:/node_modules/
			},
			{
				test:/\.css$/,
				loader:'style!css',
				include:projectRoot,
		        exclude: /node_modules/
			},
			{
				test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
				loader: 'url',
				query: {
				  limit: 10000
				}
			},
			{
				test:/\.js$/,
				loader:'babel',
				include:projectRoot,
		        exclude: /node_modules/,
		        query: {
		        	presets: ['es2015']
		      	}
			}
		]
	},
	plugins:[
		new webpack.optimize.UglifyJsPlugin({	//压缩代码
		    compress: {
		        warnings: false
		    },
		    mangle: {
		        except: ['Vue', '$', 'exports', 'require']
		    }
		}),
		new HtmlWebpackPlugin({
			filename:'/view/index.html',//模板路径，相对于path,
			template:'./src/view/index.html',
			inject:false,
			hash:true
		}),
		new HtmlWebpackPlugin({
			filename:'/view/profit.html',//模板路径，相对于path,
			template:'./src/view/profit.html',
			inject:false,
			hash:true
		}),
		/*new ExtractTextPlugin('styles.css')*/
	]
}