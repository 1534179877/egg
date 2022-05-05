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
        const file = ctx.request.files[0]; //获取文件
        const rand = Date.now()+parseInt(Math.random()*999+'')  //随机名字
        let last =  file.filename.split('.').pop(); // 获取文件后缀名
        let name = rand+'.'+last;  //拼接文件名
        let toFileName = '/upload/' + name  //文件路径
        const to = path.dirname(__dirname)+toFileName; //地址
        await fs.copyFileSync(file.filepath,to); //复制文件
        await fs.unlinkSync(file.filepath);
        // 格式化返回值 返回新的文件存储地址
        ctx.body =  await ctx.service.utils.admin(200, {url:`http://localhost:7001/upload/${name}`},'上传成功');
    }
}

module.exports = UploadController
