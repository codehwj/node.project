
import mongoose, { mongo } from 'mongoose';
import { db_url } from '../../config';

// 连接数据库
mongoose.connect(db_url, {
  
});

require('./user');
require('./token');


exports.User = mongoose.model('User');
exports.Token = mongoose.model('Token');