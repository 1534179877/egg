'user strict';

const Service = require('egg').Service;

class homeService extends Service{

    async getswiper(){
        const { ctx } = this;
        //const data = await ctx.app.mysql.select('swiper');
        const data = await ctx.model.Swiper.find();
        const  res = await ctx.service.utils.msginit(data);
        return res;
    }
    async getfloor(){
        const { ctx } = this;
        const data = await ctx.model.Floor.find()
        const  res = await ctx.service.utils.msginit(data);
        return res;
    }
}
//暴露
module.exports = homeService;
