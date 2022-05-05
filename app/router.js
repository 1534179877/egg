'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  //const xmlParseMiddleware = app.middleware.xmlParse();
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
  router.get('/goods/search',controller.goods.searchgoods);
  router.post('/goods/detail',controller.goods.getdetail);
  router.get('/goods/getgoods',controller.goods.getgoods)
  router.post('/goods/updateitem',controller.goods.updateitem)
  router.get('/goods/getorder',controller.goods.getorder)
  router.post('/goods/updateorder',controller.goods.updateorder)
  //分类模块
  router.get('/categories',controller.goods.getcat);
  router.post('/categories/update',controller.goods.updatecat);
  router.post('/categories/delete',controller.goods.deletecat);
  //admin 使用路由
  router.post('/user/login',controller.user.login);
  router.get('/user/getuser',controller.user.getuser);
  router.post('/upload',controller.upload.upload);
  //支付
 /* router.get('/pay/ali', controller.alipay.alipay); // 支付宝支付
  router.get('/pay/ali/return',  controller.alipay.aliReturn); // 支付宝支付成功回调
  router.post('/pay/ali/notify', xmlParseMiddleware, controller.alipay.aliNotify); // 支付成功异步通知 注意关闭csrf验证*/


};
