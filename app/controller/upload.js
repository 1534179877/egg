'use strict'

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
        ctx.body =  await ctx.service.utils.admin(200, {url:'/upload'},'上传成功');

    }

}

module.exports = UploadController
