'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/demo', controller.user.index);
  router.get('/web_demo', controller.user.web_demo);
  router.get('/add', controller.user.addUser);
};