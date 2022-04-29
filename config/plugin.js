'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // 配置mongoose
  mongoose: {
    enable: true,
    package: 'egg-mongoose',
  },
  cors:{
    enable: true,
    package: 'egg-cors'
  },
  /*mysql:{
    enable: true,
    package:'egg-mysql'
  }*/
};
