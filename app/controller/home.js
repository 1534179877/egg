'use strict';

const Controller = require('egg').Controller;

//首页controller
class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egqqqfdsg??';
  }
  //楼层获取
  async getfloor(){
    const { ctx } = this;
    ctx.body= await this.service.home.getfloor();
  }
  //轮播图获取
  async getswiper(){
    const { ctx } = this;
    ctx.body= await this.service.home.getswiper();
  }

}

module.exports = HomeController;
