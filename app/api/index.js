
'use strict';

import home from './v1/home';
import users from './v1/users';
import shopping from './shopping';



/**
 * 启动 路由
 * @param  {Object} app - express 的 app
 */
module.exports = (app) => {
  
  app.use('/', home);
  app.use('/users', users);
  app.use('/shopping', shopping);
  
}