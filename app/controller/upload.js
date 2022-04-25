/*
'use strict'


const Controller = require('egg').Controller;
const path = require('path')
const fs = require("fs");
//const pump = require('mz-moudles/pump')

//filecontroller
class fileController extends Controller {
    async getuploadpic(){
        const {ctx} = this;
        //获取对象
        const stream = await ctx.getFileStream()
        const name = stream.filename;
        const filename = Date.now() + encodeURIComponent(stream.fields.name);
        //写入的路径
        const target = path.join(this.config.baseDir,'app/upload',filename)
        //写入文件
        const writeStream = fs.createWriteStream(target)；

        //await pump(stream,writeStream);
    }
}

module.exports = fileController*/
