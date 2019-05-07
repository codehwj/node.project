'use strict';

import mongoose from 'mongoose';
import {db_url} from '../../config';
import chalk from 'chalk';
mongoose.connect(db_url);
mongoose.Promise = global.Promise;

const db = mongoose.connection;

db.once('open', () => {
  console.log(
    chalk.green('数据库连接成功')
  );
})

db.on('error', (err) => {
  console.error(
    chalk.red('Error in MongoDb connection: ' + err)
  )
  mongoose.disconnect();
})

db.on('close', () => {
  console.log(
    chalk.red('数据库断开, 重新连接数据库')
  );
  mongoose.connect(db_url);
})

export default db;