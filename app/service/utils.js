'use strict'

const Service = require('egg').Service;

class utilsService extends Service{
    async msginit(data){
        const res = {
            message:[],
            meta:{
                msg:"",
                status:0,
            }
        };
        if(data){
            res.message = data;
            res.meta.msg = '获取成功'
            res.meta.status = 200
        }
        return res;

    }

    async admin(status,data,msg){
        return {
            status,
            data,
            msg
        }
    }
}

module.exports = utilsService