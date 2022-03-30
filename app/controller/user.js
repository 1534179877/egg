'use strict';

const Controller = require('egg').Controller;

class userController extends Controller {
  //注册
  async register(){
    const { ctx } = this;
    const res = await ctx.service.user.register(
        ctx.request.body);
    if(res === 1){
      ctx.body = {
        status: 200,
        msg:'添加成功'
      }
    }else{
      ctx.body = {
        status: 404,
        msg:'添加失败'
      }
    }
  }
  //获取所以用户
  async login(){
    const { ctx } = this;
    let ansnum = await ctx.service.user.login(ctx.request.body);
    if(ansnum == 200){
      ctx.body = {
        status: 200,
        msg: '登录成功'
      }
    }else{
      ctx.body = {
        status: 300,
        msg: '无用户信息请注册！'
      }
    }
  }
  //寻找用户
  async find_user(){
    const { ctx } = this;
    ctx.body = await  ctx.service.user.find_user(ctx.request.body.userName);
  }
  //修改用户
  async update_user(){
    const { ctx } = this;
  }




}

module.exports = userController;
