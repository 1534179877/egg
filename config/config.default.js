/* eslint valid-jsdoc: "off" */

'use strict';

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
      url: process.env.MONGO_URL || 'mongodb://localhost:27017/egg',
      options: {},
      plugins: []
    }
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
