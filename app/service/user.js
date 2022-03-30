'user strict';

const Service = require('egg').Service;

class userService extends Service{
    //用户注册
  async register(user){
   const { ctx } = this;
   try{
       const res = await ctx.model.User.create(user);
       console.log(res+':::***');
       return 1;
   }catch (error) {
       console.log(error);
       return 2;
   }
  }
  //用户登录
  async login(user){
        const { ctx } = this;
        console.log(user);
        const res = await ctx.model.User.findOne(user,(err,result)=>{
            err?`没有数据${err}`:result;
        });
      console.log(res);
        if(res !== null){
            return 200; //查询成功
        }else{
            return 100; //无数据
        }
  }
  //用户查找
  async find_user(name){
      const { ctx } = this;
      const res = await ctx.model.User.find({userName: name});
      return
  }


  async update_user(id){
      const { ctx } = this;
  }


}
//暴露
module.exports = userService;
