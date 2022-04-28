'use strict'
//上传图片并保存本地
//返回新的图片url 用于前端保存路径到数据库中

const Controller = require('egg').Controller;
const path = require('path');
const fs = require('fs')

//filecontroller
class UploadController extends Controller {
    async upload() {
        const ctx = this.ctx;
        const file = ctx.request.files[0];
        const rand = Date.now()+parseInt(Math.random()*999+'')
        let last =  file.filename.split('.').pop();
        let name = rand+'.'+last;
        let toFileName = '/upload/' + name
        const to = path.dirname(__dirname)+toFileName;
        await fs.copyFileSync(file.filepath,to);
        await fs.unlinkSync(file.filepath);
        ctx.body =  await ctx.service.utils.admin(200, {url:`http://localhost:7001/upload/${name}`},'上传成功');

    }

}

module.exports = UploadController
