'use strict'

const Service = require('egg').Service;
//const Alipay = require('alipay-mobile').default;

class PayService extends Service{
    /*async alipay(orderData){
        return new Promise((resolve, reject)=>{
            const service = new Alipay(this.config.pay.ali.options);
            //返回参数
            service.createPageOrderURL(oderData,this.config.pay.ali.basicParams).then(result =>{
                console.log(result);
                resolve(result.data);
            });

        })
    }
    aliNotify(params) {
        //实例化 alipay
        const service = new Alipay(this.config.pay.ali.options);
        return service.makeNotifyResponse(params);
    }*/
}

module.exports = PayService;