'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  //user相关路由
  router.post('/users/register',controller.user.register);
  router.get('/users/getuser',controller.user.get_user);
  router.post('/users/find_user',controller.user.find_user);
  router.post('/users/update_user',controller.user.update_user);
  router.post('/users/register',controller.user.register);

};
