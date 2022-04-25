'use strict';

const Service = require('egg').Service;


class userService extends Service{
    //用户注册
  async register(user){
      const { ctx } = this;
      //const {userName,password} = user;
      const backdata = await ctx.model.User.create(user);
      if(!backdata){ //使用格式化返回数据
          return await ctx.service.utils.admin(300,{},'注册失败！');
      }else{
              return await ctx.service.utils.admin(200,backdata,'注册成功');
      }

  }
  //用户登录
  async login(user){
        const { ctx } = this;
        const {userName,password} = user;
        const backdata = await ctx.model.User.findOne({userName:userName});
        if(!backdata){ //使用格式化返回数据
            return await ctx.service.utils.admin(300,{},'无该用户请注册！');
        }else{
         if(password !== backdata.password){
             return await ctx.service.utils.admin(300,{},'密码错误！');
         }else{
             return await ctx.service.utils.admin(200,backdata,'登录成功');
         }
        }
  }
  //用户查找
  async getuser(){
      const { ctx } = this;
      const backdata = await ctx.model.User.find();
      if(!backdata){
          return await ctx.service.utils.admin(300,{},'暂无数据');
      }else{
          return await ctx.service.utils.admin(200,backdata,'获取成功');
      }
  }

}
//暴露
module.exports = userService;
