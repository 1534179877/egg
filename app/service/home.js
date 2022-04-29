'use strict';

const Service = require('egg').Service;
//业务逻辑
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

    async updateswiper(swiper){
        const { ctx } = this;
        const { _id } = swiper
        const data = await  ctx.model.Swiper.updateOne({_id:_id},swiper)
        return await ctx.service.utils.admin(200,data,'修改成功');
    }

    async updatefloor(floor){
        const { ctx } = this;
        const { id ,target} = floor
        const {name,image_src,open_type,floorname,navigator_url} = target
        //更新floorname
        await  ctx.model.Floor.updateOne(
            {_id:id},
            {'$set':{'floor_title.name':floorname,}})
        //更新商品信息
        await  ctx.model.Floor.updateOne(
            {_id:id ,'product_list.navigator_url':navigator_url },
            {'$set': {
                        'product_list.$.name':name,
                        'product_list.$.image_src':image_src,
                        'product_list.$.open_type':open_type
                    }})
        return await ctx.service.utils.admin(200,{},'修改成功');
    }

    async deleteswiper(id){
        const { ctx } = this;
        const data = await  ctx.model.Swiper.deleteOne({_id:id})
        return await ctx.service.utils.admin(200,data,'修改成功');
    }
    async deletefloor(floor){
        const { ctx } = this;
        const { id ,target} = floor
        const {name,image_src,open_type,floorname,navigator_url} = target
        //更新floorname
        await  ctx.model.Floor.updateOne(
            {_id:id},
            {'$set':{'floor_title.name':floorname,}})
        //更新商品信息
        await  ctx.model.Floor.updateOne(
            {_id:id ,'product_list.navigator_url':navigator_url },
            {'$set': {
                    'product_list.$.name':name,
                    'product_list.$.image_src':image_src,
                    'product_list.$.open_type':open_type
                }})
        return await ctx.service.utils.admin(200,{},'修改成功');
    }
}
//暴露
module.exports = homeService;
