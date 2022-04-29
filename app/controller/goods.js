'use strict'

const Controller = require('egg').Controller

class GoodsController extends Controller{
    //获取商品
    async getcat(){
        const { ctx } = this;
        ctx.body = await ctx.service.goods.getcat();
    }
    async updatecat(){
        const { ctx } = this;
        const data = ctx.request.body.activedata;
        ctx.body = await ctx.service.goods.updatecat(data);
    }

    async deletecat(){
        const { ctx } = this;
        const data = ctx.request.body.activedata;
        ctx.body = await ctx.service.goods.deletecat(data);
    }
    //获取细节
    async getdetail(){
        const { ctx } = this;
        const data = ctx.request.body.data;

        ctx.body = await ctx.service.goods.getdetail(data);
    }
    //TODO 搜索
    async search(){
        const { ctx } = this;
        const data = ctx.request.body.data;
        ctx.body = await ctx.service.goods.search(data);
    }
}
module.exports = GoodsController