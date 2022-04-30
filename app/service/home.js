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
        const res = await  ctx.model.Swiper.updateOne({_id:_id},swiper)
        if(res.ok == 1){
            return await ctx.service.utils.admin(200,res,'更新成功');
        }else{
            return await ctx.service.utils.admin(200,res,'更新失败');
        }
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
       const res =  await  ctx.model.Floor.updateOne(
            {_id:id ,'product_list.navigator_url':navigator_url },
            {'$set': {
                        'product_list.$.name':name,
                        'product_list.$.image_src':image_src,
                        'product_list.$.open_type':open_type
                    }})
        if(res.ok == 1){
            return await ctx.service.utils.admin(200,res,'更新成功');
        }else{
            return await ctx.service.utils.admin(200,res,'更新失败');
        }
    }

    async deleteswiper(id){
        const { ctx } = this;
        const data = await  ctx.model.Swiper.deleteOne({_id:id})

            return await ctx.service.utils.admin(200,data,'删除成功');

    }
    async deletefloor(floor){
        const { ctx } = this;
        const { id ,target} = floor
        const {name} = target
        const {_id} = id;
        //更新floorname
        const backfloor = await ctx.model.Floor.findOne({_id:_id});
        const productlist = backfloor.product_list;
        for(let i=0;i<productlist.length;i++){
            if(productlist[i].name === name){
                productlist.splice(i,1);
                break;
            }
        }
        const res = await ctx.model.Floor.updateOne({_id:_id}, {$set:{product_list: productlist}})
        if(res.ok == 1){
            return await ctx.service.utils.admin(200,res,'删除成功');
        }else{
            return await ctx.service.utils.admin(200,res,'删除失败');
        }
    }
}
//暴露
module.exports = homeService;
