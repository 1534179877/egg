/* eslint valid-jsdoc: "off" */

'use strict';

const path = require("path");
/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1647870725218_1576';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  //配置 mongoose
  config.mongoose = {
    client: {
      url: process.env.MONGO_URL || 'mongodb://localhost:27017/rklshop',
      options: {},
      plugins: []
    }
  }

  //配置mysql
  config.mysql = {
    client: {
      // host
      host: 'localhost',
      // 端口号
      port: '3306',
      // 用户名
      user: 'root',
      // 密码
      password: '123456',
      // 数据库名
      database: 'reldshop',
    },
    app: true,
    agent: false,
  }
  //文件上传配置
  config.multipart = {
    mode:'file',
    fieldNameSize:30,
    fieldSize:'3mb',
    fields: 1,
    fileSize:'3mb',
    files: 1,
    whitelist: [ '.png' ,'.jpg'],
  }


  //静态资源
  config.static = {
    prefix:'/upload',
    dir: path.join(appInfo.baseDir, 'app/upload'),
    dynamic: true, //缓存
    preload: false,
    maxAge:3000000,
    buffer: true,

  }

  //配置 Cors
  config.cors = {
    origin: '*',
    allowMethods: 'GER4T,HEAD,PUT,POST,DELETE,PATCH'
  }
  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: true
    },
    domainWhiteList:['http://localhost:8000']
}
  return {
    ...config,
    ...userConfig,
  };
};
