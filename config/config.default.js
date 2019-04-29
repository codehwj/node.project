
var config = {

  // 调试
  debug: true,
  // 项目名称
  name: 'my.first.api',
  // cookie 配置 [ 必填, 建议修改 ],
  cookie_secret: 'cookie_secret_codehwj',
  // jwt配置 [必填]
  // https://github.com/hokaccha/node-jwt-simple
  jwt_secret: 'jwt_secret_codehwj',
  // MongoDB配置 [必填]
  db_url: 'mongodb://localhost:27017/codehwj',
  // 本地ip [必填]
  host: 'localhost',
  // 端口 [必填]
  port: 3000,
  // 网站的域名 [必填]
  domain: 'http://localhost:3000',
  jpush: {
    // 是否生产环境
    production: false,
    appKey: '',
    masterSecret: ''
  }
}

module.exports = config;