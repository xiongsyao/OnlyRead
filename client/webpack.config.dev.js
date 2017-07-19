var webpack =require("webpack");

module.exports = {
  devtool:"source-map",

  entry: {
    index:__dirname + "/src/index.js"
  },

  output: {
    path: __dirname + "/dist",
    filename: "[name].bundle.js",
    publicPath:"/dist/"
  },

  devServer: {
    inline:true,
    contentBase: "./",
    port: '8088',
    historyApiFallback: true,

    proxy:{
      '/api/*': {
        target: 'http://127.0.0.1:5000',
      }
    }
  },


  module:{
    loaders:[

      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },

      {
        test:/\.js$/,
        exclude: /node_modules/,
        loader:'babel-loader',
        query:{
          presets:['es2015','react'],
	        "plugins": [
		        ['import', { libraryName: 'antd', style: 'css' }],
	        ],
        },
      },

      {
        test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[ext]?[hash]'
        }
      },

      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: 'img/[name].[ext]'
        }
      }
    ]
  },

};
