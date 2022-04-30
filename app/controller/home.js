'use strict';

const Controller = require('egg').Controller;

//首页controller
class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egqqqfdsg??';
  } //没用的
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

  //修改轮播图
  async updateswiper(){
    const { ctx } = this;
    const swiper = ctx.request.body.swiper;
    ctx.body  = await this.service.home.updateswiper(swiper);
  }
  //修改floor
  async updatefloor(){
    const { ctx } = this;
    const floor = ctx.request.body;
    ctx.body  = await this.service.home.updatefloor(floor);
  }

  async deleteswiper(){
    const { ctx } = this;
    const id = ctx.request.body;
    ctx.body  = await this.service.home.deleteswiper(id);
  }

  async deletefloor(){
    const { ctx } = this;
    const floor = ctx.request.body;
    console.log(floor);
    ctx.body  = await this.service.home.deletefloor(floor);
  }

}

module.exports = HomeController;
