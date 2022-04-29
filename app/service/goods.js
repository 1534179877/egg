'use strict'

const Service = require('egg').Service

class GoodsService extends Service{
    async getcat(){
        const { ctx } = this;
        const data  = await ctx.model.Goods.find();
        return  await ctx.service.utils.msginit(data)

    }
    async updatecat(data){
        const { ctx } = this;
        const { cat_id,cat_name,cat_level,cat_pid,cat_icon} = data;
        if(cat_level === 0){
            const res =await ctx.model.Goods.updateOne({cat_id:cat_id},{$set:{cat_name:cat_name}});
            return await ctx.service.utils.admin(200,res,'');
        }
        else if(cat_level === 1){
           const res = await ctx.model.Goods.updateOne({cat_id:cat_pid,'children.cat_id':cat_id},{'$set':{'children.$.cat_name':cat_name}})
            return await ctx.service.utils.admin(200,res,'');
        }else{
            const first  = await ctx.model.Goods.findOne({'children.cat_id':cat_pid})
            //console.log(first.children[0]);
            const child1 = first.children;
            //更新文档 返回child
            for(let i=0;i<child1.length;i++){
                if(child1[i].cat_id == cat_pid){
                    let child2 = child1[i].children;
                    for(let j=0;j<child2.length;i++){
                        if(child2[j].cat_id == cat_id){
                            let target = child2[j];
                            console.log(target);
                            target.cat_name = cat_name;
                            target.cat_icon = cat_icon;
                            console.log(target);
                            break;
                        }
                    }
                }
            }
            const res = await ctx.model.Goods.updateOne({cat_id:first.cat_id}, {$set:{children:child1}})
            return await ctx.service.utils.admin(200,res,'');
        }
    }


    async deletecat(data){
        const {ctx} = this;
        return 1;
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