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
  router.post('/home/deleteswiper',controller.home.deleteswiper);
  //floor模块
  router.get('/home/floordata',controller.home.getfloor);
  router.post('/home/updatefloor',controller.home.updatefloor);
  router.post('/home/deletefloor',controller.home.deletefloor);
  //goods模块
  router.get('/goods/search',controller.goods.search);
  router.post('/goods/detail',controller.goods.getdetail);
  //分类模块
  router.get('/categories',controller.goods.getcat);
  router.post('/categories/update',controller.goods.updatecat);
  router.post('/categories/delete',controller.goods.deletecat);
  //admin 使用路由
  router.post('/user/login',controller.user.login);
  router.get('/user/getuser',controller.user.getuser);
  router.post('/upload',controller.upload.upload);



};
