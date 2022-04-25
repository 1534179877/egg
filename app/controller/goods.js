'use strict'

const Controller = require('egg').Controller

class GoodsController extends Controller{
    async getgoods(){
        const { ctx } = this;
        ctx.body = await ctx.service.goods.getgoods();
    }

    async getdetail(){
        const { ctx } = this;
        const data = ctx.request.body.data;

        ctx.body = await ctx.service.goods.getdetail(data);
    }

    async search(){
        const { ctx } = this;
        const data = ctx.request.body.data;
        ctx.body = await ctx.service.goods.search(data);
    }
}
module.exports = GoodsController