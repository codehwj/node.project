

/**
 * 启动 路由
 * @param  {Object} app - express 的 app
 */
module.exports = (app) => {
  
  app.use('/', require('./v1/home'));
  app.use('/users', require('./v1/users'));
  
}