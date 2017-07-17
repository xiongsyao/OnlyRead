/**
 * Created by Administrator on 2017/7/17.
 */
module.exports = process.env.NODE_ENV === 'production' ? require('./webpack.config.prod.js') : require('./webpack.config.dev.js');
