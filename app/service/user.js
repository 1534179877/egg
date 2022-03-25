'user strict';

const Service = require('egg').Service;

class userService extends Service{
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

  async get_user(){
        const { ctx } = this;
        const res = await ctx.model.User.find({});
        return res;
  }

  async find_user(name){
      const { ctx } = this;
      const res = await ctx.model.User.findOne({userName: name})
  }





}
//暴露
module.exports = userService;
