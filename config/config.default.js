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
      url: process.env.MONGO_URL || 'mongodb://localhost:27017/rklshop'||'mongodb://localhost:27017/minishop',
      options: {},
      plugins: []
    }
  }

  //配置mysql
  /*config.mysql = {
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
  }*/
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
  //支付配置
  /*config.pay ={
    ali:{
      options: {
        app_id:'2021000119675231',
        appPrivKeyFile:'MIIEowIBAAKCAQEAmzgPDBYBbYwXusdCWgqG/rE0IpZo6prjCoMOtToa+V5VNSHGmfIiLWpYpmOruHk9g8ScDGUrYkg2Hr69toYCq0enF+Mxlyso4GsHmuHl4lllRXTyk4xF9akqFUGyKnHqhfzhqli3rsFyXOw/x8isxoqnQEOVpetUiqzc7uB4sEN0dj1x9a2ofpAhWL+dsmj+QeQ3ZkZs8xqJPqLly6uu7QIexHnyqesAWP5lgQAzQ48+GjmYBWcA4XYOUVEr22/IuDkbP0E1cp/DiZyKBG2NtiUfradBugfbUYkYAgwnJFWkkbaAE0a2LmtH9ZshWfxJ7gI2n6+CMbwo9AQ7B3DrLwIDAQABAoIBAEHfb5tcd2yrSKLOz5zw3MuYHp0TIiF2bCZY6lQE/c+YtiafV+6bcN+/QzISGJ1obq/OL7+e6+OA697uagrdIqLX/NTJaZFTErzzDz4u4mXGNJFeiVgO7t3L1f1BbUBQKgyE/qxRjFqQ5F0FMigyRQjZbRN72zWYAr/7jqOeBfofbHns/BXTpPjbAVxf2EXflIxKFMV7ihLtGxl7gOsIrgTkGrwsmnPxAVzELVobQZQLsPZM7mSS15VhIh+sySTgFlehYoaXU1dKZWx+FRedaFU5GgMnUxArQ8KNyahF4gaGC+Ti/z5d/6iRO5sP8UgJZoG4V0PlFC8JYkrQzssx89kCgYEA2+A7GbrFdMdwlnO7BPgy6dnxnOxvbwk/p2Ftds9eDCN5myDBPloEUDiBsNgZQZvfKgPGpaHTdoF9dt3NMpXI6QaueseJcDH1YfDpEnAeiQIKXNMtA+x3ZArQLsvUuXpe1wgPXezXdDjiHl1xQUogY6SMvqTCcePKo8FMi/ATWo0CgYEAtLhrfqtLXLKV75PHVfiSaeWlONmBuh6MUraEcvKbCNulcAp8Fot+tDKDcTLZ27pAHe+32m9F2sNx4bHzBo6abXO1l1isSxilxcJPJMxi05oSGQNG9kyZdY6FLkMY/KZBCokQlhDr/pZh54g+hs7JjOJadptH2r5QWXdtSfj066sCgYBoa7ElowGrWBwsF4I19fmX/Z01PUQeo3HLeAWYaxrrAN37wi6EAhQSVQOijL5R3ki5l1l7x8K5gP2oueV9pIzpvfaW8LRgyBkVDmhiDUUzI/jv5Ip4VpDMviXoU30PKQJpdLZ3kMcxtuIMMaxbqWyAZeFBmNWPaPMPmflUbAuE8QKBgQCOB4pj6Ne3qJrxyOCWjl7zXwo03ax4y91YfB0oAccadRVWMsdHKKaRlEl9Q4u4hm4xmN6Ti3QI9CWiTSpEcvqnHpMOuR/ffSV7gLSWpRLeXm3uvoact6K7oyDENPOETF09nG8uoWn3kdSsFIWfiREZ6iNSp8MXBQ884QFBa6mBNQKBgGlzPHC12o1n+TbVWcUBBjNXFJZGfxx3yDOcyK2Ma61Ho2KKme9xbzm57RFFs751DHmCI4+JwV+y1c+9lqNpqfTl3f66391znQ/RQduSHe0uc0hmF/DrZRH9LOuC80KlHFq/V04hPGwpvv9gSYY1l1w5Resb4lx7M6ZEylMQCt97',
        alipayPublicFile:'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAwxfniHsACY8KI4gJYrlKEcqBtGJ7zP9q1dTlMqh51yNthxdTDHs0l80Bv0FIWFTiZjjAj0QJSmxjT2csxgzxq0oS8EUbpIlEobSBPss4qSVYFBztdFNb7Ax1w0SIjiZ3Bn23y7/l7GOzxARWMOWn1mYdN+DSPCI5D8kqtZs9R34FKNydKof6jqIPF4PDIaUgewqll2B2hTV5naOsy4mHDaEQ+EW+fL8avu4SrGfWINCB76m/PfdfV8RlMumYzyN5H3QV4OT2uNI3pdDqcwleBHXY+lo6Qh496KrDeiu851QX4J6ltRLNMHASSVsAomJUQyy7pHssgdc8y/d9O1meRQIDAQAB',
      },
      basicParams: {
        return_url: 'http://127.0.0.1:7001/pay/ali/return', // 支付成功返回地址 此处仅作为举例 匹配路由 后期可配置调试环境、测试环境和线上环境 区分不同域名
        notify_url: 'http://127.0.0.1:7001/pay/ali/notify' //支付成功异步通知地址 此处仅作为举例
      }
    }
  }*/
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
      /*ignore: ctx =>{
        let arr = [
            '/pay/ali/notify'
        ];
      },*/
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
