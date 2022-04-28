'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  //小程序使用路由
  router.get('/', controller.home.index);
  //swiper模块
  router.get('/home/swiperdata',controller.home.getswiper);
  router.post('/home/updateswiper',controller.home.updateswiper);

  router.get('/home/floordata',controller.home.getfloor);
  router.get('/goods/search',controller.goods.search);
  router.post('/goods/detail',controller.goods.getdetail);
  router.get('/categories',controller.goods.getgoods);
  //admin 使用路由
  router.post('/user/login',controller.user.login);
  router.get('/user/getuser',controller.user.getuser);
  router.post('/upload',controller.upload.upload);



};
