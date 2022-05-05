'use strict'

const Controller = require('egg').Controller
//const AlipayFormData = require('alipay-sdk/lib/form').default;

class PayController extends Controller{
    /*async alipay(){
        const { ctx } = this;
        const { id ,orderId ,amount} = ctx.request.body;
        //let orderResult = await
        const data = {
            outTradeNo: orderId,
            totalAmount: amount,
            subject:'商品',
            body:'订单描述',
        }
        let url = await this.service.alipay.alipay(data);
        ctx.redirect(url);
    }
    async aliReturn() {
        this.ctx.body = '支付成功';
        //接收异步通知 页面什么的自行处理 
    }

    async aliNotify(){
        const { ctx } = this;
        const params =ctx.request.body;
        let result = await this.service.alipay.aliNotify(params);
        if(result.code === '0'){
            switch (result.trade_status) {
                case 'WAIT_BUYER_PAY':
                    console.log(result.trade_status)
                    break;
                case 'TRADE_CLOSED':
                    console.log(result.trade_status)
                    break;
                case 'TRADE_SUCCESS':
                    console.log(result.trade_status)
                    break;
                case 'TRADE_FINISHED':
                    console.log(result.trade_status)
                    break;
            }
        }
    }

    async setOrder(r,userId) {
        let {buyer_logon_id, total_amount, send_pay_date, out_trade_no} = r;
        let user = await User.findById(userId)
        await Order.insertMany({
            buyer_logon_id,
            total_amount,
            send_pay_date,
            out_trade_no,
            userId,
            typepay: 2
        })
        let account = parseInt(total_amount) + user.account;
        await User.findByIdAndUpdate(userId, {account})
    }*/
}
module.exports = PayController;