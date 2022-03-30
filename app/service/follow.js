'use strict';

const Service = require('egg').Service;

class FollowService extends Service{

    async follow(userA,userB){ //
        const { ctx } = this;
        const userAInfo = await ctx.model.User.findOne({userName:userA});
        const userBInfo = await ctx.model.User.findOne({userName:userB});

        const req = await ctx.model.Follow.findOne({UserAId:userAInfo._id,UserBId:userBInfo._id});
        if(req.followType === 0){
            //TODO 返回 关注
        }else if(req.followType === 1){
            //  TODO  已关注 if =3 >2   if 1 > 0
        }else if(req.followType === 2){
            //TODO  关注  2>3
        }else{
            //TODO  已关注 3 > 2
        }
    }

}