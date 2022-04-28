'use strict';

const Controller = require('egg').Controller;

class userController extends Controller {
  //注册
  async register(){
    const { ctx } = this;
    ctx.body = await ctx.service.user.register(
        ctx.request.body);
  }
  //登录
  async login(){
    const { ctx } = this;
    const user = ctx.request.body
    ctx.body  = await ctx.service.user.login(user)
  }
  //获取用户
  async getuser(){
    const { ctx } = this;
    ctx.body = await  ctx.service.user.getuser(ctx.request.body.userName);
  }
  //修改用户
  async update_user(){
    const { ctx } = this;
  }
}
module.exports = userController;
