'use strict'

const Service = require('egg').Service

class GoodsService extends Service{
    async getcat(){
        const { ctx } = this;
        const data  = await ctx.model.Goods.find(); //查找所有
        return  await ctx.service.utils.msginit(data)
    }
    async updatecat(data){
        const { ctx } = this;
        //解构
        const { cat_id,cat_name,cat_level,cat_pid,cat_icon} = data;
        // 一级菜单  直接查询然后更新
        if(cat_level === 0){
            const res =await ctx.model.Goods.updateOne({cat_id:cat_id},{$set:{cat_name:cat_name}});
            if(res.ok == 1){
                return await ctx.service.utils.admin(200,res,'修改成功');
            }else{
                return await ctx.service.utils.admin(200,res,'修改失败');
            }
        }        // 二级菜单  直接查询然后更新 filter 是查询的过滤的调剂  ￥set mongodb 的修饰符 这之后的只修改对应的属性 没有￥set修饰 就会变成只有这一个属性
        else if(cat_level === 1){
           const res = await ctx.model.Goods.updateOne({cat_id:cat_pid,'children.cat_id':cat_id},{'$set':{'children.$.cat_name':cat_name}})
            if(res.ok == 1){
                return await ctx.service.utils.admin(200,res,'修改成功');
            }else{
                return await ctx.service.utils.admin(200,res,'修改失败');
            }
        }else{
            //三层嵌套查询很麻烦 所以我们使用 全部更新 的方法进行更新 获取目标后 在这里更新信息  然后去update整个二层数据
            const first  = await ctx.model.Goods.findOne({'children.cat_id':cat_pid})
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
            if(res.ok == 1){
                return await ctx.service.utils.admin(200,res,'修改成功');
            }else{
                return await ctx.service.utils.admin(200,res,'修改失败');
            }
        }
    }
    async deletecat(data){
        const {ctx} = this;
        const {cat_id , cat_level, cat_pid,} = data;
        if(cat_level === 0 ){
            const res = await ctx.model.Goods.deleteOne({cat_id:cat_id});
            if(res.ok == 1){
                return await ctx.service.utils.admin(200,res,'修改成功');
            }else{
                return await ctx.service.utils.admin(200,res,'修改失败');
            }
        }else if(cat_level === 1){
            const childrens =await ctx.model.Goods.findOne({cat_id:cat_pid}).children;
            for(let i = 0 ;i<childrens.length;i++){
                if(childrens[i].cat_id = cat_id){
                    childrens.splice(i,1);
                    break;
                }
            }
            const res = await ctx.model.Goods.updateOne({cat_id:cat_pid},{$set:{children:childrens}}) //更新
            if(res.ok == 1){
                return await ctx.service.utils.admin(200,res,'修改成功');
            }else{
                return await ctx.service.utils.admin(200,res,'修改失败');
            }
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
                            child2.splice(j,1);
                            break;
                        }
                    }
                }
            }
            const res = await ctx.model.Goods.updateOne({cat_id:first.cat_id}, {$set:{children:child1}})
            if(res.ok == 1){
                return await ctx.service.utils.admin(200,res,'修改成功');
            }else{
                return await ctx.service.utils.admin(200,res,'修改失败');
            }
        }

    }
    //
    async getdetail(data){
        const { ctx } = this;
        return data;
    }
    async search(data){
        const { ctx } = this;
        const{cid} = data;
        const ret = await ctx.model.Items.find({cat_id:cid});
        const res= {
            total:ret.length,
            goods:ret
        }
        return await ctx.service.utils.msginit(res);
    }
    //商品
    async getitem(){
        const { ctx } = this;
        const data = await ctx.model.Items.find();
        return await ctx.service.utils.msginit(data);
    }
    async updateitem(data){
        const { ctx } = this;
        const { _id } = data
        const res = await  ctx.model.Items.updateOne({_id:_id},data)
        if(res.ok == 1){
            return await ctx.service.utils.admin(200,res,'更新成功');
        }else{
            return await ctx.service.utils.admin(200,res,'更新失败');
        }
    }

    //订单
    async getorder(){
        const { ctx } = this;
        const data = await ctx.model.Order.find();
        return await ctx.service.utils.msginit(data);
    }
    async updateorder(data){
        const { ctx } = this;
        const { _id ,order_type} = data
        const res = await  ctx.model.Order.updateOne({_id:_id}, {$set:{order_type}})
        if(res.ok == 1){
            return await ctx.service.utils.admin(200,res,'更新成功');
        }else{
            return await ctx.service.utils.admin(200,res,'更新失败');
        }
    }

}

module.exports = GoodsService