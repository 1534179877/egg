'use strict';

const Service = require('egg').Service;

class homeService extends Service{

    async getswiper(){
        const { ctx } = this;
        //const data = await ctx.app.mysql.select('swiper');
        const data = await ctx.model.Swiper.find();
        return await ctx.service.utils.msginit(data);

    }
    async getfloor(){
        const { ctx } = this;
        const data = await ctx.model.Floor.find()
        return await ctx.service.utils.msginit(data);

    }
}
//暴露
module.exports = homeService;
