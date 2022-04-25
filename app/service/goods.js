'use strict'

const Service = require('egg').Service

class GoodsService extends Service{
    async getgoods(){
        const { ctx } = this;
        const data  = await ctx.model.Goods.find();
        const res = await ctx.service.utils.msginit(data)
        return res;
    }
    async getdetail(data){
        const { ctx } = this;
        return data;
    }
    async search(data){
        const { ctx } = this;
        return data;
    }
}

module.exports = GoodsService