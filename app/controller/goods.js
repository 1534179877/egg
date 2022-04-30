'use strict'

const Controller = require('egg').Controller

class GoodsController extends Controller{
    //获取商品
    async getcat(){
        const { ctx } = this;
        ctx.body = await ctx.service.goods.getcat();
    }
    //async await 是node  的异步编程方式 有await 就必须有async存在  异步指执行这里时如果需要时间处理 就不会被阻塞
    async updatecat(){
        const { ctx } = this;//上下文 前端的数据就会在ctx.request.body中
        const data = ctx.request.body.activedata;
        //调用service层处理数据
        ctx.body = await ctx.service.goods.updatecat(data);
    }

    async deletecat(){
        const { ctx } = this;
        const data = ctx.request.body.scope;
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