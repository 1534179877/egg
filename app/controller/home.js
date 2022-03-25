'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egqqqfdsg??';
  }
  async login(){
    const { ctx } = this;
    ctx.body = 'hhhh';
  }
}

module.exports = HomeController;
